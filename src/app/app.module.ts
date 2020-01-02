import { AuthService } from './shared/services/auth.service';
import { httpInterceptorProviders } from './shared/interceptors/index';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { SiteModule } from './site/site.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuestService } from './shared/guards/auth-guest.service';
import { AuthGuardService } from './shared/guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    AdminModule,
    SiteModule,
    AuthModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthService,
    AuthGuestService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
