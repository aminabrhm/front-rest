import { AuthService } from './../../main/auth/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// TODO > trigger user info
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  get isLoggedIn(): boolean {
    return this.authService.loggedIn
  }

}
