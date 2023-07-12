import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutoreslistComponent } from './pages/autoreslist/autoreslist.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { RamdonautorComponent } from './pages/ramdonautor/ramdonautor.component';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'listado',
        component: AutoreslistComponent
      },
      {
        path: 'obras',
        component: ObrasComponent
      },
      {
        path: 'aleatorio',
        component: RamdonautorComponent
      },       
      {
        path: '**',
        redirectTo: 'listado'
      }

    ]
  }

]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})


export class AutoresRoutingModule { }
