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



}
