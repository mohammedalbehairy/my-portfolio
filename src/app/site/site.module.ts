import { SiteRoutingModule } from './site-routing.module';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './../core/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
