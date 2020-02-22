import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {routing} from "./app-routing.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './pages/login/login.component';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AuthService} from './shared/auth.service';
import {ConfigurationService} from './shared/configuration.service';
import {AuthGuardService} from './shared/auth-guard.service';
import {LoginService} from './shared/login.service';
import { HorsesComponent } from './pages/horses/horses.component';
import { PagesComponent } from './pages/pages.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './pages/horses/dialog/dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HorsesComponent,
    PagesComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxDatatableModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule

  ],
  providers: [
    AuthService,
    ConfigurationService,
    AuthGuardService,
    LoginService
  ],
  entryComponents:[
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
