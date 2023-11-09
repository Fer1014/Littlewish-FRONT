import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosListarComponent } from './components/usuarios/usuarios-listar/usuarios-listar.component';
import { UsuariosCreaeditaComponent } from './components/usuarios/usuarios-creaedita/usuarios-creaedita.component';
import { MatTableModule } from '@angular/material/table'
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TipoUsuarioComponent } from './components/tipo-usuario/tipo-usuario.component';
import { TipousuarioListarComponent } from './components/tipo-usuario/tipousuario-listar/tipousuario-listar.component';
import { TipousuarioCreaeditaComponent } from './components/tipo-usuario/tipousuario-creaedita/tipousuario-creaedita.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { TarjetaListarComponent } from './components/tarjeta/tarjeta-listar/tarjeta-listar.component';
import { TarjetaCreaeditaComponent } from './components/tarjeta/tarjeta-creaedita/tarjeta-creaedita.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UniversidadComponent } from './components/universidad/universidad.component';
import { CreaeditaUniversidadComponent } from './components/universidad/creaedita-universidad/creaedita-universidad.component';
import { ListarUniversidadComponent } from './components/universidad/listar-universidad/listar-universidad.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { CreaeditaCarreraComponent } from './components/carrera/creaedita-carrera/creaedita-carrera.component';
import { ListarCarreraComponent } from './components/carrera/listar-carrera/listar-carrera.component';
import { FormacionacademicaComponent } from './components/formacionacademica/formacionacademica.component';
import { CreaeditaFormacionacademicaComponent } from './components/formacionacademica/creaedita-formacionacademica/creaedita-formacionacademica.component';
import { ListarFormacionacademicaComponent } from './components/formacionacademica/listar-formacionacademica/listar-formacionacademica.component';
import { CrearComponent } from './components/pago/crear/crear.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ListarProyectoComponent } from './components/proyecto/listar-proyecto/listar-proyecto.component';
import { CrearProyectoComponent } from './components/proyecto/crear-proyecto/crear-proyecto.component';
import { PagoComponent } from './components/pago/pago.component';
import { ListarComponent } from './components/pago/listar/listar.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuariosListarComponent,
    UsuariosCreaeditaComponent,
    TipoUsuarioComponent,
    TipousuarioListarComponent,
    TipousuarioCreaeditaComponent,
    TarjetaComponent,
    TarjetaListarComponent,
    TarjetaCreaeditaComponent,
    MenuComponent,
    LoginComponent,
    UniversidadComponent,
    CreaeditaUniversidadComponent,
    CreaeditaCarreraComponent,
    CarreraComponent,
    ListarUniversidadComponent,
    ListarCarreraComponent,
    FormacionacademicaComponent,
    CreaeditaFormacionacademicaComponent,
    ListarFormacionacademicaComponent,
    PagoComponent,
    ListarComponent,
    CrearComponent,
    ProyectoComponent,
    ListarProyectoComponent,
    CrearProyectoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
