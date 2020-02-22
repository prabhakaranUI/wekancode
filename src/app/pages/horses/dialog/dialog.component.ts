import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators, EmailValidator} from '@angular/forms';
import {LoginService} from "../../../shared/login.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public horseColor: any
  public setDob: any
  public openkey: any
  public horse: FormGroup;

  constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder, public login_service: LoginService, private datePipe: DatePipe) {

     this.openkey = data;
    this.horseColor = [
      {value: 'white', viewValue: 'White'},
      {value: 'brown', viewValue: 'Brown'},
      {value: 'gray', viewValue: 'Gray'}
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
      this.setDob = this.datePipe.transform(this.horse.controls['horseDob'].value, 'yyyy-MM-dd');
      const data = {
      'horse_name': this.horse.controls['horseName'].value,
      'horse_number': this.horse.controls['horseNum'].value,
      'age_verified': this.horse.controls['AgeVerified'].value == 'yes' ? true : false,
      'dob': this.setDob,
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
    this.onNoClick('cloce')

  }

  public loginDataFailure(error) {
    console.log(error)
  }






  onNoClick(key): void {
    this.dialogRef.close(key);
  }

}
