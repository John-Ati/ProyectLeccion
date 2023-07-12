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

  onSubmit() {
    // Verificar la autenticación aquí utilizando un arreglo de usuarios
    const users = [
      { username: 'admin', password: '123' },     
    ];
    const user = users.find(u => u.username === this.username && u.password === this.password);


    if (user) {
      this.router.navigateByUrl('/autores/listado');
    } else {
      console.log('Credenciales inválidas');
    }
  }


}

