import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosCreaeditaComponent } from './components/usuarios/usuarios-creaedita/usuarios-creaedita.component';
import { UsuariosListarComponent } from './components/usuarios/usuarios-listar/usuarios-listar.component';
import { TipoUsuarioComponent } from './components/tipo-usuario/tipo-usuario.component';
import { TipousuarioCreaeditaComponent } from './components/tipo-usuario/tipousuario-creaedita/tipousuario-creaedita.component';
import { TipousuarioListarComponent } from './components/tipo-usuario/tipousuario-listar/tipousuario-listar.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { TarjetaCreaeditaComponent } from './components/tarjeta/tarjeta-creaedita/tarjeta-creaedita.component';
import { TarjetaListarComponent } from './components/tarjeta/tarjeta-listar/tarjeta-listar.component';

const routes: Routes = [
  {
    path: 'usuarios', component: UsuariosComponent, children: [
      { path: 'nuevo', component: UsuariosCreaeditaComponent },
      { path: 'listar', component: UsuariosListarComponent },
      { path: 'edicion/:id', component: UsuariosCreaeditaComponent}
    ]
  },
  {
    path: 'tipousuario', component: TipoUsuarioComponent, children: [
      { path: 'nuevo', component: TipousuarioCreaeditaComponent },
      { path: 'listar', component: TipousuarioListarComponent },
      { path: 'edicion/:id', component: TipousuarioCreaeditaComponent}
    ]
  },
  {
    path: 'tarjeta', component: TarjetaComponent, children: [
      { path: 'nuevo', component: TarjetaCreaeditaComponent },
      { path: 'listar', component: TarjetaListarComponent },
      { path: 'edicion/:id', component: TarjetaCreaeditaComponent}
    ]
  },
  {
    path: 'universidad',
    component: UniversidadComponent,
    children: [
      { path: 'nuevo', component: CreaeditaUniversidadComponent },
      { path: 'ediciones/:id', component: CreaeditaUniversidadComponent },
    ],
  },
  {
    path: 'carrera',
    component: CarreraComponent,
    children: [
      { path: 'nuevo', component: CreaeditaCarreraComponent },
      { path: 'ediciones/:id', component: CreaeditaCarreraComponent },
    ],
  }, 
  {
    path: 'formacionacademica',
    component: FormacionacademicaComponent,
    children: [
      { path: 'nuevo', component: CreaeditaFormacionacademicaComponent },
      { path: 'ediciones/:id', component: CreaeditaFormacionacademicaComponent },
    ],
  },
  {
    path: 'curriculum',
    component: CurriculumComponent,
    children: [
      { path: 'nuevo', component: CreaeditaCurriculumComponent },
      { path: 'ediciones/:id', component: CreaeditaCurriculumComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
