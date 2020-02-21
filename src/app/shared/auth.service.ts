import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  loggedIn() {
    return (this.getAccessToken() === undefined || this.getAccessToken() === '' || this.getAccessToken() == null) ?  false : true;
  }


  getSessionData(variable) {
    return sessionStorage.getItem(variable);

  }
  setSessionData(variable, value) {
    return sessionStorage.setItem(variable, value);
  }
  getAccessToken() {
    return sessionStorage.getItem('access_token');
  }

  checkAuthentication() {
    if (this.loggedIn()) {
      this.router.navigate(['/home/11']);
    }
  }

}
