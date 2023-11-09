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
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { UniversidadComponent } from './components/universidad/universidad.component';
import { CreaeditaUniversidadComponent } from './components/universidad/creaedita-universidad/creaedita-universidad.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { CreaeditaCarreraComponent } from './components/carrera/creaedita-carrera/creaedita-carrera.component';
import { FormacionacademicaComponent } from './components/formacionacademica/formacionacademica.component';
import { CreaeditaFormacionacademicaComponent } from './components/formacionacademica/creaedita-formacionacademica/creaedita-formacionacademica.component';
import { PagoComponent } from './components/pago/pago.component';
import { CrearComponent } from './components/pago/crear/crear.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CrearProyectoComponent } from './components/proyecto/crear-proyecto/crear-proyecto.component';


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
    path: 'menu', component: MenuComponent
  },
  {
    path: '', component: LoginComponent
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
    path: 'pagos', component: PagoComponent, children: [
      { path: 'nuevo', component: CrearComponent },
      
      
    ]
  },
  {
    path: 'proyectos', component: ProyectoComponent, children: [
      { path: 'nuevo', component: CrearProyectoComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
