import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, public service: MainService) {
  }

  canActivate() {
    if (this.service.isLoggedIn() == false) {
      this.router.navigate(['/auth'])
      return false;
    }
    else {
      return true;
    }
  }
  
}
