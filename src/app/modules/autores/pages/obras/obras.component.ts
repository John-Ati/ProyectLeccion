import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent {

  constructor(private ServiceService: ServiceService) { }

 get resultados(){
 return this.ServiceService.resultados;
}


}
