import { AuthService } from './../../main/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user: string = localStorage.getItem("user") || ''
    this.user = JSON.parse(user)
  }

  get isLogedin(): boolean {
    return this.authService.loggedIn
  }

}
