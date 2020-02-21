import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HorsesComponent} from "./pages/horses/horses.component";
import {LoginComponent} from "./pages/login/login.component";
import {PagesComponent} from "./pages/pages.component";
import {AuthGuardService} from "./shared/auth-guard.service";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '',
    component: PagesComponent,  canActivate: [AuthGuardService],  children: [
      {path: 'horses', component: HorsesComponent }
    ]},

   {path: 'login', component:LoginComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: true
});
