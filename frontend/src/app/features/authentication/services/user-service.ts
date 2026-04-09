import { Injectable } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly IS_LOGGED_IN: string = 'isLoggedIn';
  private users: User[] = [
    {
      id: 1,
      username: 'utkarsh',
      email: 'utkarsh.singh@gmail.com',
      password: 'password123'
    }
  ];

  isValidUser(username: string, password: string): boolean {
    const userDetail = this.users.find(user => user.username === username && user.password === password);
    if(userDetail){
      localStorage.setItem(this.IS_LOGGED_IN, 'true');
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem(this.IS_LOGGED_IN) === 'true';
  }

  logout(): void {
    localStorage.removeItem(this.IS_LOGGED_IN);
  }

  getUserById(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }
}
