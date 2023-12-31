import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SearchObraResponse } from "../interface/autor.interface";

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private servicioUrl: string = "https://poetrydb.org/";

  constructor(private http: HttpClient) { }
  private _historial: string[] = [];
  public resultados: any[] = [];
  public isLoading: boolean = false;
  public favoritos: SearchObraResponse[] = [];
  public totalFavoritos: number = 0;


  get historial() {
    return [...this._historial];
  }

  BuscarObra(query: string) {
    query = query.trim().toLocaleLowerCase();
    this.isLoading = true;
    this.http.get<SearchObraResponse[]>(`https://poetrydb.org/author/${query};Sonnet`)
      .subscribe((resp) => {
        this.resultados = resp;
        this.isLoading = false;
      });

  }
  

  ObtenerObrasAleatorias(){
    this.isLoading = true;
    this.http.get<SearchObraResponse[]>(`https://poetrydb.org/random/10/author,title.json`)
      .subscribe((resp) => {   
        this.resultados = resp;     
        this.isLoading = false; 
      });
  }
  
  agregarAFavoritos(obra: SearchObraResponse) {
    this.favoritos.push(obra);
    this.totalFavoritos++;
  }
  
  eliminarFavorito(obra: SearchObraResponse) {
    const index = this.favoritos.indexOf(obra);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      this.totalFavoritos--;
    }
  }
  

}
