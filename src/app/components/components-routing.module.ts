import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosCreaeditaComponent } from './usuarios/usuarios-creaedita/usuarios-creaedita.component';
import { UsuariosListarComponent } from './usuarios/usuarios-listar/usuarios-listar.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';
import { TipousuarioCreaeditaComponent } from './tipo-usuario/tipousuario-creaedita/tipousuario-creaedita.component';
import { TipousuarioListarComponent } from './tipo-usuario/tipousuario-listar/tipousuario-listar.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetaCreaeditaComponent } from './tarjeta/tarjeta-creaedita/tarjeta-creaedita.component';
import { TarjetaListarComponent } from './tarjeta/tarjeta-listar/tarjeta-listar.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { UniversidadComponent } from './universidad/universidad.component';
import { CreaeditaUniversidadComponent } from './universidad/creaedita-universidad/creaedita-universidad.component';
import { CarreraComponent } from './carrera/carrera.component';
import { CreaeditaCarreraComponent } from './carrera/creaedita-carrera/creaedita-carrera.component';
import { FormacionacademicaComponent } from './formacionacademica/formacionacademica.component';
import { CreaeditaFormacionacademicaComponent } from './formacionacademica/creaedita-formacionacademica/creaedita-formacionacademica.component';
import { PagoComponent } from './pago/pago.component';
import { CrearComponent } from './pago/crear/crear.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { CrearProyectoComponent } from './proyecto/crear-proyecto/crear-proyecto.component';
import { ComentarioPuntuacionComponent } from './comentario-puntuacion/comentario-puntuacion.component';
import { ListarComentarioComponent } from './comentario-puntuacion/listar/listar.component';
import { AddComentarioComponent } from './comentario-puntuacion/add/add.component';
import { PuntuacionComponent } from './puntuacion/puntuacion.component';
import { PuntuacionListarComponent } from './puntuacion/puntuacion-listar/puntuacion-listar.component';
import { PuntuacionCreaeditaComponent } from './puntuacion/puntuacion-creaedita/puntuacion-creaedita.component';


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
  {
    path: 'comentarios', component: ComentarioPuntuacionComponent, children: [
      { path: 'listar', component: ListarComentarioComponent },
      { path: 'add', component: AddComentarioComponent },
    ]
  },

  {
    path: 'puntuacion', component: PuntuacionComponent, children: [
      { path: 'listar', component: PuntuacionListarComponent },
      { path: 'add', component: PuntuacionCreaeditaComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
