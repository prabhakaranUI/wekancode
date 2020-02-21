import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../shared/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  constructor(public fb: FormBuilder, public login_service: LoginService ) {

    this.login = this.fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }


  ////login////
  getLogin(value){
    if(this.login.valid){
        const data = {
            'email': value.email,
            'password': value.password
        };
       this.login_service.getLogin(data).subscribe(
           (successData) => {
             this.loginDataSuccess(successData);
           },
          (error) => {
              this.loginDataFailure(error);
        }
       )

    }
  }

   public loginDataSuccess(data){
      console.log(data)

   }
    public loginDataFailure(error){
        console.log(error)
    }



}
