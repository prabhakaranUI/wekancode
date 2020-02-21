import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = this.configurationService.getHost();
  constructor(private http: HttpClient, private configurationService: ConfigurationService, public auth: AuthService) { }



  getLogin(data) {
    console.log(data)
    let json = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
    };
    const url = `${this.apiUrl}/users/login` ;
    return this.http.post(url , data, httpOptions).pipe(
        catchError(this.error));
  }










  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
