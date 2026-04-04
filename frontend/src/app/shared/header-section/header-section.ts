import { Component, Input } from '@angular/core';
import { UserService } from '../../features/authentication/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [],
  templateUrl: './header-section.html',
  styleUrl: './header-section.css',
})
export class HeaderSection {
  @Input() title: string = 'NOTES';

  constructor(
    private userService: UserService, 
    private routerService: Router
  ) {

  }

  logout() {
    this.userService.logout();
    this.routerService.navigate(['/']);
  }
  
}
