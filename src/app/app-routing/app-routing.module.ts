import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import {SigninComponent} from '../signin/signin.component';
import { NewComponent } from '../new/new.component';
import { Page404Component } from '../page404/page404.component';
import { UpdateComponent } from '../update/update.component';


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
    {
      path: 'new-user',
      component: NewComponent,
      },
      {
        path: 'update-user',
        component: UpdateComponent,
        },
      {
        path: '**',
        component: Page404Component,
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
