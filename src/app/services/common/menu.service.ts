import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private menu: MenuController) { }

  openMenu(shouldEnable, id) {
    this.menu.enable(shouldEnable, id);
    this.menu.open(id);
  }

  close(id) {
    this.menu.close(id)
  }
}
