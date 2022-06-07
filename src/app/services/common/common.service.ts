import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  defaultImage = '/assets/images/loading.gif';
  defaultImage2 = '/assets/images/mind-logo-1.png';
  
  logo = "https://via.placeholder.com/50"
  logo_2 = ""
  imageLoading: "/assets/loading.gif"



  constructor(
    private _location: Location,
    private router: Router,
    public platform: Platform) { }


  backClicked() {
    this._location.back();
  }

  goToRouter(route) {
    this.router.navigate([route]);
  }

  goToRouterParam(url, data) {
    this.router.navigate([url], { state: { data: data } });
  }

  isCordova(plat?: string) {
    return this.platform.is("cordova");
  }


  // check-empty-object
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  escapeHtml(unsafe) {
    if (unsafe) {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }
  }

  transformarString(string) {
    if (!string) { return null; }
    const number = string.toString();
    return number.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "").toLowerCase()
  }
}
