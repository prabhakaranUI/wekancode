import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../shared/login.service";
import {DialogComponent} from "./dialog/dialog.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.scss']
})
export class HorsesComponent implements OnInit {
    public horseList: any;
    public spinner: boolean;
  constructor(public login_service: LoginService, public dialog: MatDialog,  private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
 this.getList();
  }


    horseDialog(key, id): void {
        let selectData = '';
         for(let i = 0; i < this.horseList.length; i++){
          if(this.horseList[i].id == id){
              selectData = this.horseList[i];
          }
      }
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '500px',
            data: {key, selectData}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getList();
            console.log('The dialog was closed');
            if(result == 'confirm'){
                this.deleteHorse(id);
            }
        });
    }


  ////list////
  getList(){
      this.spinner = true;
      this.login_service.list().subscribe(
          (successData) => {
            this.loginDataSuccess(successData);
          },
          (error) => {
            this.loginDataFailure(error);
          });
    }

  public loginDataSuccess(successData){
      this.spinner = false;
      this.horseList = successData.data
  }
  public loginDataFailure(error){
    console.log(error)
  }


    ////Delete////
    deleteHorse(id){
        this.login_service.delete(id).subscribe(
            (successData) => {
                this.deleteHorseSuccess(successData);
            },
            (error) => {
                this.deleteHorseFailure(error);
            });
    }

    public deleteHorseSuccess(successData){
        console.log(successData);
        this.openSnackBar('Deleted Successful', 'ok');
        this.getList();
    }
    public deleteHorseFailure(error){
        console.log(error)
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }


}
