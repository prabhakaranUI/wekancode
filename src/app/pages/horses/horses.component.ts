import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../shared/login.service";
import {DialogComponent} from "./dialog/dialog.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.scss']
})
export class HorsesComponent implements OnInit {
    public horseList: any;
  constructor(public login_service: LoginService, public dialog: MatDialog) {

  }

  ngOnInit() {
 this.getList();
  }


    horseDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '500px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }


  ////list////
  getList(){
      this.login_service.list().subscribe(
          (successData) => {
            this.loginDataSuccess(successData);
          },
          (error) => {
            this.loginDataFailure(error);
          });
    }

  public loginDataSuccess(successData){
    console.log(successData, 'horses');
    this.horseList = successData.data
  }
  public loginDataFailure(error){
    console.log(error)
  }

}
