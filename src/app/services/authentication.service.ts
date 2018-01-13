import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {


    user: Subject<User> = new Subject();

    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:5000/api/token', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {

                    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('token', user.token);
                }
                this.user.next(user);
                return user;
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

}
