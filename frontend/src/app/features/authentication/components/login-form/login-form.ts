import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

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
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  onSubmit() {
    if(this.userService.isValidUser(this.name, this.password)){
       alert('Login successful');
    }else {
      alert('Invalid username or password');
    }
  }
}
