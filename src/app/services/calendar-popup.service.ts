import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarPopupService {

  public dateNunmber = new BehaviorSubject(null);

  public eventDates = new BehaviorSubject(null);

  public dateInit = new BehaviorSubject(null);

  public dateFinish = new BehaviorSubject(null);
  constructor() {}
}
