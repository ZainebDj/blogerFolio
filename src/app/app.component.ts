import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'blogerFolio';
  isadmin=false;
  isactive=false;
  isMenuVisible=false;
  constructor(private route:Router){
    let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isadmin=true;
    }
  }
  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role=sessionStorage.getItem('role');
    if (currentroute == '/' || currentroute == '/signup'  ) {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }
    if (currentroute == '/detail' ) {
      this.isactive = false
    } else {
      this.isactive = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/']);
  }
}
