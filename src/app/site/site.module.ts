import { SharedModule } from './../shared/shared.module';
import { SiteRoutingModule } from './site-routing.module';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './../core/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DefaultLayoutComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    BlogsComponent,
    ContactComponent,
    BlogDetailsComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SiteRoutingModule,
    SharedModule
  ]
})
export class SiteModule { }
