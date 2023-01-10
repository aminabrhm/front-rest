import { Link } from './../models/link';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  links: Link[] = [{
    title: 'Posts',
    href: '/post',
    isActive:  true
  }]
}
