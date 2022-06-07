import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { registerLocaleData } from "@angular/common";
import localeCO from "@angular/common/locales/es-CO";
import localeEnUS from "@angular/common/locales/en-US-POSIX";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

registerLocaleData(localeCO, "es");
registerLocaleData(localeEnUS, "en");

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  constructor(private translate: TranslateService, private http: HttpClient) { }

  switchLanguage(language: string) {
    console.log("language", language);
    if (language === "es") {
      this.translate.use("es");
      registerLocaleData(localeCO, "es");
      localStorage.setItem("translate", language);
    } else {
      this.translate.use("en");
      registerLocaleData(localeEnUS, "en");
      localStorage.setItem("translate", language);
    }
  }

  getTranslation(lang: string) {
    let result;
    this.translate.get(lang).subscribe((data: any) => {
      result = data;
    });
    return result;
  }

  setDefaultLang() {
    this.translate.setDefaultLang("en");
  }


  getJsonLanguage(lang: string): Observable<any> {
    return this.http.get(`${environment.functions}/v2/languages/language?lang=${lang}`)
      .pipe(map((response: JSON) => {
        return response;
      }))
  }

  navigatorLanguage() {
    return window.navigator.language;
  }

  getTranslate(value) {
    return new Promise((resolve) => {
      this.translate.get([value]).subscribe((translations) => {
        console.log("translations", translations);
        resolve(translations);
      });
    });
  }
}
