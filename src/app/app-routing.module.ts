import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { authhijoGuard } from './guards/authhijo.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Login' 
  },
  {
    path: 'Login',
    component: LoginComponent,
    canActivateChild: [authhijoGuard]
  },
  {
    path: 'autores',
    loadChildren: () => import('./modules/autores/autores.module').then(m => m.AutoresModule),
    canActivateChild: [authhijoGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
