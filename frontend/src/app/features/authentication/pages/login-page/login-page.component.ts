import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [IonCol, IonRow, IonGrid, LoginFormComponent, IonContent],
})
export class LoginPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
