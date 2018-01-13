import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.auth.user.subscribe((user)=> {this.currentUser = user});
   }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    this.router.navigate(["/"]);
    this.currentUser = null;
    this.auth.logout();
  }
}
