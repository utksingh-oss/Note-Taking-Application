import { Injectable } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john.doe@example.com',
      password: 'password123',
    },
    {
      id: 2,
      username: 'normie_011',
      email: 'normie.011@example.com',
      password: 'password123',
    }
  ];
  
  isValidUser(username: string, password: string): boolean {
    const userDetail = this.users.filter(
      (user) => user.username === username && user.password === password
    );
    return userDetail.length > 0;
  }
}
