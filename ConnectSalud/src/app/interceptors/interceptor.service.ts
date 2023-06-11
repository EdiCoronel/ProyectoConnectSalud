import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthStateService } from '../services/auth-state.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  private readonly TOKEN_KEY = 'token';

  constructor( private authService: AuthService, private authStateService: AuthStateService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(this.TOKEN_KEY)
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
      return next.handle(authReq);
    }
    console.log(token);
    return next.handle(req);
  }
}


