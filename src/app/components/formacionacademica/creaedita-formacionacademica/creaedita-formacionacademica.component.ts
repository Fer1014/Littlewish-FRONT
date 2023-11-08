import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Carrera } from 'src/app/models/carrera';
import { FormacionAcademica } from 'src/app/models/formacionacademica';
import { Universidad } from 'src/app/models/universidad';
import { CarreraService } from 'src/app/services/carrera.service';
import { FormacionacademicaService } from 'src/app/services/formacionacademica.service';
import { UniversidadService } from 'src/app/services/universidad.service';

@Component({
  selector: 'app-creaedita-formacionacademica',
  templateUrl: './creaedita-formacionacademica.component.html',
  styleUrls: ['./creaedita-formacionacademica.component.css']
})
export class CreaeditaFormacionacademicaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  academica: FormacionAcademica = new FormacionAcademica();
  mensaje: string = '';
  listaUniversidades: Universidad[] = [];
  listaCarreras: Carrera[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private uS: UniversidadService,
    private cS: CarreraService,
    private faS: FormacionacademicaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      university: ['', Validators.required],
      career: ['', Validators.required],
    });
    this.uS.list().subscribe((data) => {
      this.listaUniversidades = data;
    });
    this.cS.list().subscribe((data) => {
      this.listaCarreras = data;
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.academica.Nombre_Secundaria = this.form.value.Nombre_Secundaria;
      this.academica.ID_Universidad.ID_Universidad = this.form.value.ID_Universidad;
      this.academica.ID_Carrera.ID_Carrera = this.form.value.ID_Carrera;
      this.faS.insert(this.academica).subscribe((data) => {
        this.faS.list().subscribe((data) => {
          this.faS.setList(data);
        });
      });
      this.router.navigate(['formacionacademica']);
    } else {
      this.mensaje = 'Completo los campos!!';
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
