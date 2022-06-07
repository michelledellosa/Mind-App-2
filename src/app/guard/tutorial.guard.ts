import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    return Observable.create(obs => {
      let isComplete = window.localStorage.getItem("tutorialComplete") === 'true' ? true : false
      if (!isComplete) {
        this.router.navigate(['/tutorial']);
        obs.next(false);
      } else {
        obs.next(true);
      }
    });
  }
}
