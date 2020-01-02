import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.getToken();
    if (token) {
      const cloned = req.clone({
        setHeaders: { 
          Authorization: `bearer ${token}`
      }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
