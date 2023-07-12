import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    SliderComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  
    
  ],
  exports:[
    RouterModule,
    SliderComponent
 
    
  ]
})
export class SharedModule { }
