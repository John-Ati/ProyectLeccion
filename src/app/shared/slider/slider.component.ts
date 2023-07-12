import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
constructor(private router: Router){}

Logout(){
  const confirmacion = confirm('¿Quieres cerrar sesion?');
  if (confirmacion){
    localStorage.removeItem('token')
    this.router.navigate(['/Login']);
  }
}
}
