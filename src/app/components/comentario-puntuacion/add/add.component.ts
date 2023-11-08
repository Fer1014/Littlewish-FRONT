import { Component, OnInit } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Comentario } from 'src/app/models/comentario-puntuacion';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  form: FormGroup = new FormGroup({});

  comentario: Comentario = new Comentario();
  mensaje:string= '';

  constructor(
    private route: ActivatedRoute,
    private cS: CommentService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  comment: string = '';


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      comment: [null],
    })

}

aceptar(): void {
  if (this.form.valid) {

    this.comentario.comentario = this.form.value.comment;
    this.cS.insert(this.comentario).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
    this.router.navigate(['listar']);
    }

  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

}


