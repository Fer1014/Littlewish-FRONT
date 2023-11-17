import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent {

  constructor(public route: ActivatedRoute) {}

}
