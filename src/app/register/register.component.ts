import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private userService: UserService) { }

  register() {
      this.loading = true;
      this.userService.create(this.model)
          .subscribe(
              data => {
                  // set success message and pass true paramater to persist the message after redirecting to the login page
                  this.router.navigate(['/login']);
              },
              error => {
                console.log(error);
                  this.loading = false;
              });

              
  }


  /**
   * Come up to meet you
   * To tell you I'm sorry
   * I don't know how lovyly you are.
   * Or asked me a questions 
   * Nobody said life was easy..
   * I'm going back to the start
   * Oh take me back to the start
   * Tell me you love me,
   * Come back and haunt me
   * Running in circle
   * Coming of tail 
   * Coming back as we are.
   * Nobody said it was easy.
   * 
   */
}
