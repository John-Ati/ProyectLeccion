import { Component } from '@angular/core';
import { SearchObraResponse } from 'src/app/modules/autores/interface/autor.interface';
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


  eliminarFavorito(obra: SearchObraResponse) {
    const confirmacion = confirm("¿Estás seguro de eliminar este favorito?");
    if (confirmacion) {
      this.service.eliminarFavorito(obra);
    }
  }
}
