import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Puntuacion } from 'src/app/models/puntuacion';
import { PuntuacionService } from 'src/app/services/puntuacion.service';

@Component({
  selector: 'app-puntuacion-creaedita',
  templateUrl: './puntuacion-creaedita.component.html',
  styleUrls: ['./puntuacion-creaedita.component.css']
})
export class PuntuacionCreaeditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  puntuacion: Puntuacion = new Puntuacion();
  mensaje:string= '';
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private pS: PuntuacionService,
    private formBuilder: FormBuilder,
    private router: Router,
    private uS: UsuariosService
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      puntuacion : ['', Validators.required],
      users: ['', Validators.required]
      });
      };

        aceptar(): void {
    
          console.log(this.form.value)
          this.puntuacion.puntos = parseInt(this.form.value.puntuacion);
          console.log(sessionStorage.getItem("idUsuario"));
      
          this.puntuacion.users.id = Number(sessionStorage.getItem("idUsuario"));
          this.puntuacion.usersR.id = Number(sessionStorage.getItem("idUsuarioPuntuacion"));
          
          console.log('Puntuacion:', this.puntuacion);
          this.pS.insert(this.puntuacion).subscribe((data) => {
            console.log('Respuesta del servicio:', data);
            this.pS.list().subscribe((data) => {
              this.pS.setList(data);
              console.log('Puntuacion:', this.puntuacion);
              console.log('data:', data);
            });
          });
          this.router.navigate(['components/puntuacion/listar']);
        }

    obtenerControlCampo(nombreCampo: string): AbstractControl {
      const control = this.form.get(nombreCampo);
      if (!control) {
        throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
      }
      return control;
    }
      





}
