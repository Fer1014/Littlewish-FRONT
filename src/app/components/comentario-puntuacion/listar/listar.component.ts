import { Component, OnInit, inject, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef  } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario-puntuacion';
import { CommentService } from 'src/app/services/comment.service';
import {MatCardContent, MatCardModule} from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { ComentarioPuntuacionComponent } from '../comentario-puntuacion.component';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-listar-comentariopuntuacion',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],

})
export class ListarComentarioComponent implements OnInit{

  comentarios: Comentario[] = [];
  usuarioReceptor: string | undefined;


  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
    //this.cS.listbyUser(Number(sessionStorage.getItem("idUsuarioComentario")?.toString())).subscribe((data) =>{
    
      this.comentarios = data;
      this.comentarios = this.comentarios;
      this.usuarioReceptor = sessionStorage.getItem("idUsuarioComentario")?.toString();
      console.log("idUsuarioReceptor: " + this.usuarioReceptor)

    });
    this.cS.getList().subscribe((data) => {
       this.comentarios = data;
       this.comentarios = this.comentarios;

   });

  }

  constructor(private cS: CommentService, private breakpointObserver: BreakpointObserver, private router: Router) { }

  // Función para navegar al componente ComentarioPuntuacionComponent
  navigateToComentarioPuntuacion() {
    this.router.navigate(['/components/comentarios/add']);
  }

}
