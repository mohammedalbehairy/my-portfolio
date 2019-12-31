import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './../core/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
