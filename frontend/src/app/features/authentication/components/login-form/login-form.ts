import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [
    FormsModule
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  name: string = '';
  password: string = '';

  constructor(
    private userService: UserService, 
    private router: Router
  ) {}

  onSubmit() {
    if(this.userService.isValidUser(this.name, this.password)){
       this.router.navigate(['/notes']);
    }else {
      alert('Invalid username or password');
    }
  }
}
