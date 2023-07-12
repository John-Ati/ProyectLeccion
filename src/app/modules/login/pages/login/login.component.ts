import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }


  login() {
    const users = [
      { username: 'admin', password: '123' },
    ];
    const user = users.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      localStorage.setItem('token', Math.random().toString());
      this.router.navigateByUrl('/autores/listado');
    } else {
      alert('Contraseña incorrecta');
      this.router.navigateByUrl('/Login');
    }
  }

}













