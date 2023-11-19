import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Proyectos } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  proyecto: Proyectos = new Proyectos();
  mensaje: string = '';
  
  MaxFecha: Date = moment().add(100, 'days').toDate();
  constructor(
    //Form
    private formBuilder: FormBuilder,
    //ListaUniversidades
    //private uS:UniversityService,
    //Insertar 
    private pS:ProyectoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      //Este variable
      titulo: ['',Validators.required],
      FechaInicio:['',Validators.required],
      FechaFin:['',Validators.required],
    });
    //Lista de universidades
    //this.uS.list().subscribe(data=>{
      //this.listaUniversidades=data;
    //});
  }


  aceptar():void{
    if(this.form.valid){                    //ngOnInit
      this.proyecto.descripcion=this.form.value.titulo;
      this.proyecto.fechaInicio=this.form.value.FechaInicio;
      this.proyecto.fechaFin=this.form.value.FechaFin;
      this.pS.insert(this.proyecto).subscribe(data=>{
        this.pS.list().subscribe(data=>{
          this.pS.setList(data);
        })
      });
      //Ver en el routing
      this.router.navigate(['proyectos']);
    }else{
      this.mensaje="Complete los campos!!! >:v"
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
