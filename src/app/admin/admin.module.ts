import { SharedModule } from './../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './../core/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
