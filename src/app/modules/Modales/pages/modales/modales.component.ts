import { Component } from '@angular/core';
import { ServiceService } from 'src/app/modules/autores/service/service.service';

@Component({
  selector: 'app-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.css']
})
export class ModalesComponent {
  constructor(public service: ServiceService) { }
  get cantidadFavoritos() {
    return this.service.totalFavoritos;
  }

}
