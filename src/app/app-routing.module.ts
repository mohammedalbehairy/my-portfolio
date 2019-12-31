import { AdminLayoutComponent } from './core/admin-layout/admin-layout.component';
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }