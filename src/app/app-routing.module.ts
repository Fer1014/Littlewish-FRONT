import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarComponent } from './components/comentario-puntuacion/listar/listar.component';
import { AddComponent } from './components/comentario-puntuacion/add/add.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'listar', component: ListarComponent },
  { path: 'add', component: AddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
