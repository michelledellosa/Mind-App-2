import { Injectable } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate/ngx';

@Injectable({
  providedIn: 'root'
})
export class AppRateService {

  constructor(public appRate: AppRate) { }

  showRatePrompt(value) {
    const appRate: any = window['AppRate'];
    const preferences = appRate.getPreferences();
    preferences.simpleMode = true;
    preferences.storeAppURL = {
      ios: "1439246510",
      android: "market://details?id=com.bfn.onecup.jr"
    };

    preferences.openUrl = () => {
      window.open(preferences.storeAppURL.android, '_blank', 'location=yes');
    };
    appRate.setPreferences(preferences);
    appRate.promptForRating(value);


  }
}
