import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-mn',
  templateUrl: './user-mn.component.html',
  styleUrls: ['./user-mn.component.css']
})
export class UserMnComponent implements OnInit {
  users : User[] = [];
  filteredUsers: any = [];
  
  constructor(private userService: UserService) {
    this.userService.getAll()
    .subscribe(users => this.filteredUsers = this.users = users);
   }

  filter(query: string) {
    this.filteredUsers = (query) ?
      this.users.filter(p => (p.firstName + p.lastName).toLowerCase().includes(query.toLowerCase())) :
      this.users;
  }

  ngOnInit() {
  }

}
