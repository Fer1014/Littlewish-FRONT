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
import { PagoService } from './services/pago.service';
import { PagoComponent } from './components/pago/pago.component';
import { CrearComponent } from './components/pago/crear/crear.component';
import { ListarComponent } from './components/pago/listar/listar.component';
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
