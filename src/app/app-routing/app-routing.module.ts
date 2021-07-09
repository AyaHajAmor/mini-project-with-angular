import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import {SigninComponent} from '../signin/signin.component';


const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  },
  {
  path: 'connection',
  component: LoginComponent,
  },
  {
    path: 'inscription',
    component: SigninComponent,
    },
  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ],
})
export class AppRoutingModule { }