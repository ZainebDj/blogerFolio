import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isLoggedIn: boolean = false;

  constructor() { }

  login() {
    // Add login logic here
    this.isLoggedIn = true;
  }

  logout() {
    // Add logout logic here
    this.isLoggedIn = false;
  }
}


