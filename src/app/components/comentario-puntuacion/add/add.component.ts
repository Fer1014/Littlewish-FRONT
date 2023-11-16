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
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios';


@Component({
  selector: 'app-add-comentariopuntuacion',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComentarioComponent implements OnInit{
 
  form: FormGroup = new FormGroup({});
  comentario: Comentario = new Comentario();
  mensaje:string= '';
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cS: CommentService,
    private formBuilder: FormBuilder,
    private router: Router,
    private uS: UsuariosService
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      comentario : ['', Validators.required],
      users: ['', Validators.required]
      });
      };

aceptar(): void {
  
    console.log(this.form.value)
    this.comentario.comentario = this.form.value.comentario;
    //this.comentario.users.name = "Patrick";
    //sessionStorage.getItem("idUsuario");
    console.log(sessionStorage.getItem("idUsuario"));

    this.comentario.users.id = Number(sessionStorage.getItem("idUsuario"));

    this.comentario.usersR.id = Number(sessionStorage.getItem("idUsuarioComentario"));

    console.log('Comentario:', this.comentario);
    this.cS.insert(this.comentario).subscribe((data) => {
      console.log('Respuesta del servicio:', data);
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
    this.router.navigate(['components/comentarios/listar']);

  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

}


