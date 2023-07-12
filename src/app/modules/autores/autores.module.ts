import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoreslistComponent } from './pages/autoreslist/autoreslist.component';
import { RamdonautorComponent } from './pages/ramdonautor/ramdonautor.component';
import { AutoresRoutingModule } from './autores-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ObrasComponent } from './pages/obras/obras.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    AutoreslistComponent,
    RamdonautorComponent,
    ObrasComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    MaterialModule,
    SharedModule
  
  ]
})
export class AutoresModule { }
