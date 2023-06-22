import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  username ="";
  password ="";

  constructor() { }

  login() {
    // Logique de connexion
    console.log('Connexion :', this.username, this.password);
    // Ajoutez votre logique de connexion ici, par exemple une requête HTTP vers un serveur
  }

  register() {
    // Logique d'inscription
    console.log('Inscription :', this.username, this.password);
    // Ajoutez votre logique d'inscription ici, par exemple une requête HTTP vers un serveur
  }
}
