import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TutorialCompletedGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return Observable.create(async obs => {
      let isComplete = window.localStorage.getItem("tutorialComplete") === 'true' ? true : false
      if (!isComplete) {
        obs.next(true);
      } else {
        this.router.navigateByUrl("/pages/home");
        obs.next(false);
      }
    });
  }
}
