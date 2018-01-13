import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

    USER_URL = 'http://localhost:5000/api/users';

    constructor(private http: HttpClient) { }


    getAll() {
        return this.http.get<User[]>(this.USER_URL);
    }

    getById(id: number) {
        return this.http.get(this.USER_URL + '/' + id);
    }

    create(user: User) {
        return this.http.post(this.USER_URL, user);
    }

    update(user: User) {
        return this.http.put(this.USER_URL + '/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.USER_URL + '/' + id);
    }

    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return {
    //             headers: headers
    //         };
    //     }
    // }
}
