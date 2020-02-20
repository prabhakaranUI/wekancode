import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  constructor(public fb: FormBuilder) {

    this.login = this.fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'passwoed': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

}
