import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators, EmailValidator} from '@angular/forms';
import * as sha512 from "js-sha512";
import {LoginService} from "../../../shared/login.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public food: any
  public horse: FormGroup;

  constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder, public login_service: LoginService) {
    this.food = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

    this.horse = this.fb.group({
      'horseName': ['', Validators.compose([Validators.required])],
      'horseNum': ['', Validators.compose([Validators.required])],
      'AgeVerified': ['', Validators.compose([Validators.required])],
      'horseDob': ['', Validators.compose([Validators.required])],
      'horseColor': ['', Validators.compose([Validators.required])],
      'ushja': ['', Validators.compose([Validators.required])]
    });
  }


  ngOnInit() {
  }

  horseDetail(value) {
    if (this.horse.valid) {
      const data = {
      'horse_name': this.horse.controls['horseName'].value,
      'horse_number': this.horse.controls['horseNum'].value,
      'age_verified': this.horse.controls['AgeVerified'].value,
      'dob': this.horse.controls['horseDob'].value,
      'color': this.horse.controls['horseColor'].value,
      'ushja_registered': this.horse.controls['ushja'].value,
      };

      this.login_service.add(data).subscribe(
          (successData) => {
            this.loginDataSuccess(successData);
          },
          (error) => {
            this.loginDataFailure(error);
          });
    }
  }

  public loginDataSuccess(successData) {
    console.log(successData);
    this.onNoClick()

  }

  public loginDataFailure(error) {
    console.log(error)
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
