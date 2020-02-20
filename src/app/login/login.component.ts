import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public from: FormGroup
  constructor(public fb: FormBuilder) {
    this.from = this.fb.group({
      'usrename': ['', Validators.compose([Validators.required])],
      'passwoed': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

}
