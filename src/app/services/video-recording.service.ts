import { Injectable, NgZone } from '@angular/core';
import * as RecordRTC from "recordrtc";
import * as  moment from "moment";
import { Observable, Subject } from 'rxjs';

interface RecordedVideoOutput {
  blob: Blob;
  url: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoRecordingService {


  private stream;
  private recorder;
  private interval;
  private startTime;
  private _stream = new Subject<MediaStream>();
  private _recorded = new Subject<RecordedVideoOutput>();
  private _recordedUrl = new Subject<string>();
  private _recordingTime = new Subject<string>();
  private _recordingFailed = new Subject<string>();


  getRecordedUrl(): Observable<string> {
    return this._recordedUrl.asObservable();
  }

  getRecordedBlob(): Observable<RecordedVideoOutput> {
    return this._recorded.asObservable();
  }

  getRecordedTime(): Observable<string> {
    return this._recordingTime.asObservable();
  }

  recordingFailed(): Observable<string> {
    return this._recordingFailed.asObservable();
  }

  getStream(): Observable<MediaStream> {
    return this._stream.asObservable();
  }

  startRecording(conf: any): Promise<any> {
    var browser = <any>navigator;
    if (this.recorder) {
      // It means recording is already started or it is already recording something
      return;
    }

    this._recordingTime.next('00:00');
    return new Promise((resolve, reject) => {
      browser.mediaDevices.getUserMedia(conf).then(stream => {
        this.stream = stream;
        this.record();
        resolve(this.stream);
      }).catch(error => {
        this._recordingFailed.next();
        reject;
      });
    });
  }

  abortRecording() {
    this.stopMedia();
  }

  private record() {
    var options = {
      // videoBitsPerSecond: 25600000,
      echoCancellation: true,
      mimeType: 'video/webm',
    }


    this.recorder = new RecordRTC(this.stream, options);
    this.recorder.startRecording();
    this.startTime = moment();

    //pruebas al codigo de junior
    const currentTime = moment();
        const diffTime = moment.duration(currentTime.diff(this.startTime));
        const time = this.toString(diffTime.minutes()) + ':' + this.toString(diffTime.seconds());
        this._recordingTime.next(time);
        this._stream.next(this.stream);

    //codigo junior
    /*this.interval = setInterval(
      () => {
        const currentTime = moment();
        const diffTime = moment.duration(currentTime.diff(this.startTime));
        const time = this.toString(diffTime.minutes()) + ':' + this.toString(diffTime.seconds());
        this._recordingTime.next(time);
        this._stream.next(this.stream);
      },
      500
    );*/
  }

  private toString(value) {
    let val = value;
    if (!value) {
      val = '00';
    }
    if (value < 10) {
      val = '0' + value;
    }
    return val;
  }

  stopRecording() {
    if (this.recorder) {
      this.recorder.stopRecording(this.processVideo.bind(this));
      //this.processVideo.bind(this.recorder)
      //this.processVideo(this.recorder);
      //this.stopMedia();
    }
  }

  private processVideo(audioVideoWebMURL) {
    // console.log(audioVideoWebMURL);
    const recordedBlob = this.recorder.getBlob();
    this.recorder.getDataURL(function (dataURL) { });
    const recordedName = encodeURIComponent('video_' + new Date().getTime() + '.webm');
    this._recorded.next({ blob: recordedBlob, url: audioVideoWebMURL, title: recordedName });
    this.stopMedia();
    //this.recorder.save(recordedName);
  }

  private stopMedia() {
    if (this.recorder) {
      this.recorder = null;
      clearInterval(this.interval);
      this.startTime = null;
      if (this.stream) {
        this.stream.getAudioTracks().forEach(track => track.stop());
        this.stream.getVideoTracks().forEach(track => track.stop());
        this.stream.stop();
        this.stream = null;
      }
    }
  }
}
