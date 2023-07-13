import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { SearchObraResponse } from '../../interface/autor.interface';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit{

  constructor(public service: ServiceService) { }
  autor: string = '';



  ngOnInit() {
    if (this.service.resultados.length > 0) {
      const firstResult: SearchObraResponse = this.service.resultados[0];
      this.autor = firstResult.author;
    }
  }

 get resultados(){

 return this.service.resultados;
}
seleccionarObra(obra: SearchObraResponse) {
  const confirmacion = confirm("¿Estás seguro de guardar en favorito esta obra?");
  if (confirmacion) {
    this.service.agregarAFavoritos(obra);
  }

}




}
