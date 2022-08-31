import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PopoverController } from '@ionic/angular';
import { PopoverCalendarComponent } from 'src/app/components/popover-calendar/popover-calendar.component';

import { CalendarPopupService } from 'src/app/services/calendar-popup.service';
import { ShoppingService } from "src/app/services/shopping.service";
import { CategoriesService } from 'src/app/services/categories.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {

  initDefault= "01/01/2000";
  currentDate1 = new Date().toDateString();
  currentDate = this.datePipe.transform(this.currentDate1, "dd/MM/yyyy");

  allDate: string = 'Select event dates';
  dateInit: Date;
  dateFinish: Date;
  auxValidator;

  public page: number;
  user;
  shoppings = [];
  storeName = [];
  stores = [];
  itemsPage: number = 5;
  shoppingLength=0;

  constructor(
    public datePipe: DatePipe,
    public popoverController: PopoverController,
    public calendarService: CalendarPopupService,
    public shoppingService: ShoppingService,
    public categoriesService: CategoriesService,
    private alertController: AlertController

  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userLogin'));
    this.search(this.initDefault,this.currentDate1)
  }

  


  search(dateInit, dateFinish) {
    console.log(this.itemsPage)
    let searchInit = this.datePipe.transform(dateInit, "dd/MM/yyyy");
    let searchFinish = this.datePipe.transform(dateFinish, "dd/MM/yyyy");

    if (dateInit == null || dateFinish == null) {
      this.presentAlert('Error en rango de fechas, por favor verifique');
    } else {
      if (dateInit > dateFinish) {
        this.presentAlert('La fecha inicial no puede ser mayor a la fecha final');
      } else {
        try {

          this.categoriesService.getCategories().subscribe(allStores => {
            this.stores = allStores.result;
            this.shoppingService.getShoppings(searchInit, searchFinish).subscribe(shopping => {
              console.log(shopping.result);
              
              this.shoppings = shopping.result;
              this.shoppingLength= this.shoppings.length
              for (let i = 0; i < this.stores.length; i++) {
                this.storeName[i] = this.stores[i].Establecimiento
              }
            })

          })

        } catch (err) {
          console.log(err)
        }
      }
    }
  }

  getStoreName(id) {
    this.categoriesService.getCategories().subscribe(allStores => {
      this.stores = allStores.result;
      this.stores.filter(resp => { return resp }).map(data => {
        if (data.Id == id) {
          return data.Establecimiento
        }
      })
    })
  }

  async presentAlert(msg:string) {

    const alert = await this.alertController.create({

      // subHeader: 'Acc',
      message: msg,
      buttons: [
        {
          text: 'ACEPTAR',
          role: 'si',
          cssClass: 'secondary'
        }]

    });
    await alert.present();
    let result = await alert.onDidDismiss();

  }
}
