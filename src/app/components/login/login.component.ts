import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({});
  usuarios: Usuarios = new Usuarios();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private uS: UsuariosService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  registrar() {
    if (this.form.valid) {
      this.usuarios.id = this.form.value.id;
        this.usuarios.username = this.form.value.username;
        this.usuarios.password = this.form.value.password;
        this.usuarios.name = this.form.value.name; 
        this.usuarios.apellidos = this.form.value.apellidos; 
        this.usuarios.dni = this.form.value.dni;
        this.usuarios.correo = this.form.value.correo;
        this.usuarios.telefono = this.form.value.telefono;
        this.usuarios.empresa = this.form.value.empresa;
        if (this.edicion) {
          this.uS.update(this.usuarios).subscribe(() => {
            this.uS.list().subscribe((data) => {
              this.uS.setList(data);
            });
          });
        } else {
          this.uS.insert(this.usuarios).subscribe((data) => {
            this.uS.list().subscribe((data) => {
              this.uS.setList(data);
            });
          });
        }
      this.router.navigate(['usuarios']);

    } else {
      this.mensaje = "Por favor complete todos los campos obligatorios."
    }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  init() {
    if (this.edicion) {
      this.uS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          username: new FormControl(data.username),
          password: new FormControl(data.password),
        });
      });
    }
  }




}
