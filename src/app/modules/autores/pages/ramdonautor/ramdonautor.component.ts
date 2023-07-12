import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-ramdonautor',
  templateUrl: './ramdonautor.component.html',
  styleUrls: ['./ramdonautor.component.css']
})
export class RamdonautorComponent implements OnInit {
  constructor(public service: ServiceService) {}

  ngOnInit() {
    this.service.ObtenerObrasAleatorias();
  }
}