import { Component, OnInit, ViewChild, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PuntuacionService } from 'src/app/services/puntuacion.service';
import { MatPaginator } from '@angular/material/paginator';
import { Puntuacion } from 'src/app/models/puntuacion';

@Component({
  selector: 'app-puntuacion-listar',
  templateUrl: './puntuacion-listar.component.html',
  styleUrls: ['./puntuacion-listar.component.css']
})
export class PuntuacionListarComponent  implements OnInit{

  puntuaciones: Puntuacion[] = [];
  usuarioReceptorP = Number(sessionStorage.getItem("idUsuarioPuntuacion")?.toString());

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private pS: PuntuacionService, public route: ActivatedRoute) {}

  ngOnInit(): void {
   // this.pS.list().subscribe((data) => {
    this.pS.listbyUser(this.usuarioReceptorP).subscribe((data) =>{
      this.puntuaciones = data;
      this.puntuaciones = this.puntuaciones;
      //this.usuarioReceptorP = sessionStorage.getItem("idUsuarioPuntuacion")?.toString();
    });

   /* this.pS.getList().subscribe((data) => {
      this.puntuaciones = data;
      this.puntuaciones = this.puntuaciones;
  });*/
  }

  navigateToPuntuacion() {
    this.router.navigate(['/components/puntuacion/add']);
  }

}
