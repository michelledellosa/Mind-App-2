import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import { DatePipe } from '@angular/common';

import { CalendarPopupService } from 'src/app/services/calendar-popup.service';

@Component({
  selector: 'app-popover-calendar',
  templateUrl: './popover-calendar.component.html',
  styleUrls: ['./popover-calendar.component.scss'],
})

export class PopoverCalendarComponent implements OnInit {

  items = Array(40);

  dateMulti: string;
  dateInit:'01/01/1990';
  type: 'string';
  

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi' ,
    
    
  };

  constructor(
    private popoverCtrl: PopoverController,
    public datePipe: DatePipe,
    public calendarServices: CalendarPopupService
  ) { }

  ngOnInit() {
      
  }

  getDates(){ 
    this.calendarServices.dateNunmber.subscribe(data=>{
      if(data==1){
        this.calendarServices.dateInit.next(this.datePipe.transform(this.dateMulti, "dd-MM-yyy").split('T')[0]);
      }   
      if(data==2){
        //console.log('dateMulti = '+this.dateMulti);
        this.calendarServices.dateFinish.next(this.datePipe.transform(this.dateMulti, "dd-MM-yyy").split('T')[0]);
      }
    });
    
    this.popoverCtrl.dismiss();
  }
}
