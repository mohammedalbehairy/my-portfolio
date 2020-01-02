import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './core/admin-layout/admin-layout.component';
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { AuthGuestService } from './shared/guards/auth-guest.service';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [AuthGuestService],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuardService],
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }