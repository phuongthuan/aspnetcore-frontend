import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }
    

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const auth = this.injector.get(AuthenticationService);
        
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${auth.getToken()}`
            }
        });
        return next.handle(req);
    }
}