import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const URL_ROOT = environment.functions

@Injectable({
  providedIn: 'root'
})
export class TranslationService implements TranslateLoader {

  constructor(private http: HttpClient) { }

  getTranslation(lang: string): Observable<any> {
    console.log('URL_ROOT', `${URL_ROOT}`)
    console.log('languages', `${URL_ROOT}/languages/get?lang=${lang}`)
    return this.http.get(`${URL_ROOT}/languages/get?lang=${lang}`)
      .pipe(map((response: JSON) => {
        return response;
      }))
  }
}
