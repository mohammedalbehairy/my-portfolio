import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'portfolio/:id',
    component: PortfolioDetailsComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blogs/:id',
    component: BlogDetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
