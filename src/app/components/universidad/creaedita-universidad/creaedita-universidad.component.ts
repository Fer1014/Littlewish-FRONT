import { Universidad } from './../../../models/universidad';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { UniversidadService } from 'src/app/services/universidad.service';

@Component({
  selector: 'app-creaedita-universidad',
  templateUrl: './creaedita-universidad.component.html',
  styleUrls: ['./creaedita-universidad.component.css']
})
export class CreaeditaUniversidadComponent implements OnInit {
  @ViewChild('pickerIngreso') pickerIngreso!: MatDatepicker<Date>;
  @ViewChild('pickerEgreso') pickerEgreso!: MatDatepicker<Date>;
  form: FormGroup = new FormGroup({});
  universidad: Universidad = new Universidad();
  mensaje: string = '';
  maxFechaIngreso: Date = moment().toDate();
  maxFechaEgreso: Date = moment().add(10, 'years').toDate();
  id: number = 0;
  edicion: boolean = false;
  constructor(
    private uS: UniversidadService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      ID_Universidad: [''],
      nameUniversidades: ['', Validators.required],
      FechaIngreso: ['', Validators.required],
      FechaEgreso: ['', [Validators.required]],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.universidad.ID_Universidad = this.form.value.ID_Universidad;
      this.universidad.nameUniversidades = this.form.value.nameUniversidades;
      this.universidad.FechaIngreso = this.form.value.FechaIngreso;
      this.universidad.FechaEgreso = this.form.value.FechaEgreso;
      if (this.edicion) {
        this.uS.update(this.universidad).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      } else {
        this.uS.insert(this.universidad).subscribe((data) => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      }
      this.router.navigate(['/universidad']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
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
          ID_Universidad: new FormControl(data.ID_Universidad),
          nameUniversidades: new FormControl(data.nameUniversidades),
          FechaIngreso: new FormControl(data.FechaIngreso),
          FechaEgreso: new FormControl(data.FechaEgreso),
        });
      });
    }
  }
}
