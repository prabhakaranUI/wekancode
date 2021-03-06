import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, EmailValidator} from '@angular/forms';
import {LoginService} from "../../shared/login.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import * as sha512 from 'js-sha512';
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  constructor(public fb: FormBuilder, public login_service: LoginService, public router: Router, private _snackBar: MatSnackBar, public auth: AuthService) {

    this.login = this.fb.group({
      'email': ['tamilselvan@mailinator.com', Validators.compose([Validators.required])],
      'password': ['Staller123#', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
      this.auth.checkAuthentication();
  }


    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }


  ////login////
  getLogin(value){
    if(this.login.valid){
        const data = {
            'email': value.email,
            'password': sha512.sha512(value.password)
        };
       this.login_service.doLogin(data).subscribe(
           (successData) => {
             this.loginDataSuccess(successData);
           },
          (error) => {
              this.loginDataFailure(error);
        });
    }
  }

   public loginDataSuccess(successData){
       console.log(successData);
       this.openSnackBar('Login Successful', 'ok');
       this.auth.setSessionData('access_token', successData.data.access_token);
       this.router.navigate(['/horses']);
   }
    public loginDataFailure(error){
        console.log(error)
    }



}
