import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario-puntuacion';
import { CommentService } from 'src/app/services/comment.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent{

  




  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  // Función para navegar al componente ComentarioPuntuacionComponent
  navigateToComentarioPuntuacion() {
    this.router.navigate(['/add']);
  }

}
