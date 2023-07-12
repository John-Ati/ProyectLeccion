import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';


const routes: Routes = [
  {
    path: '',    
    

    children: [
      {
        path: 'inicio',
        component: LoginComponent
      },    
      {
        path: 'autores',
        loadChildren: () => import('./modules/autores/autores.module').then(m => m.AutoresModule)
      },  
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: '**',
        redirectTo: 'error'
      }

    ]
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
