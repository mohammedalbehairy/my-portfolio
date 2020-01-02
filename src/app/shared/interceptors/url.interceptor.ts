import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiReq = req.clone({
      url: `http://localhost:4000/api/${req.url}`,
      headers: req.headers.set('content_type', 'application/json')
    });
    return next.handle(apiReq);
  }
}