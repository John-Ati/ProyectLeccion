import { ServiceService } from './../../service/service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';


@Component({
  selector: 'app-autoreslist',
  templateUrl: './autoreslist.component.html',
  styleUrls: ['./autoreslist.component.css']
})
export class AutoreslistComponent implements OnInit {

  authors: string[] = [];


  constructor(private http: HttpClient, 
    private router: Router, 
    public service: ServiceService) { }

  ngOnInit() {
    this.http.get<any>('https://poetrydb.org/author')
      .subscribe(data => {
        this.authors = data.authors;
      });
  }

  AuthorDetails(author: string) {
    this.router.navigate(['/autores/obras']);
    this.service.BuscarObra(author);
   

 
  }
  get cantidadFavoritos() {
    return this.service.totalFavoritos;
  }



}
