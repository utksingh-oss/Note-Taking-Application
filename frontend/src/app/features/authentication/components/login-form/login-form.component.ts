import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonInput, 
  IonCardContent, 
  IonItem, 
  IonButton, IonText } 
from "@ionic/angular/standalone";
import { FormsModule, NgModel } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [IonText, 
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonLabel,
    IonInput,
    IonButton,
    FormsModule
  ],
  standalone: true
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  
  loginError: boolean = false;

  constructor(
    private router: Router, 
    private userService: UserService
  ) { }

  login() {
    if (this.userService.isValidUser(this.username, this.password)) {
      this.router.navigate(['/notes']);
    } else {
      this.loginError = true;
    }
  }

}
