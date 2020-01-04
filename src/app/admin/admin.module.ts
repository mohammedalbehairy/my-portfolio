import { SharedModule } from './../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './../core/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogsComponent } from './components/blogs/blogs.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    PortfolioDetailsComponent,
    BlogDetailsComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
