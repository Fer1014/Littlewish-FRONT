import { Component, OnInit } from '@angular/core';
import { AbstractControl, 
  FormBuilder, 
  FormGroup,
   Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Pago } from 'src/app/models/pago';
import { Proyectos } from 'src/app/models/proyecto';
 
import { Tarjeta } from 'src/app/models/tarjeta';
import { PagoService } from 'src/app/services/pago.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TarjetasService } from 'src/app/services/tarjetas.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  pago: Pago = new Pago();
  mensaje: string = '';
  maxFecha: Date = moment().add(30, 'days').toDate();
  listaTarjetas:Tarjeta[]=[];
  listaProyectos:Proyectos[]=[];
  constructor(
    //Form
    private formBuilder: FormBuilder,
    //ListaUniversidades
    private tarjetaS:TarjetasService,
    private proyectoS:ProyectoService,
    //Insertar 
    private pagoS:PagoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      //Este variable
      monto: ['',Validators.required],
      fecha:['',Validators.required],
      tarjeta:['',Validators.required],
      proyectos:['',Validators.required],
    });
    //Lista de universidades
    this.tarjetaS.list().subscribe(data=>{
      this.listaTarjetas=data;
    });

    this.proyectoS.list().subscribe(data=>{
      this.listaProyectos=data;
    });
  }
  aceptar():void{
    if(this.form.valid){                    //ngOnInit
      this.pago.monto=this.form.value.monto;
      this.pago.fecha=this.form.value.fecha;
      this.pago.tarjeta.idTarjeta=this.form.value.tarjeta;
      this.pago.proyectos.idproyecto=this.form.value.proyectos;
      this.pagoS.insert(this.pago).subscribe(()=>{
        this.pagoS.list().subscribe(data=>{
          this.pagoS.setList(data);
        })
      });
      //Ver en el routing
      this.router.navigate(['components/proyectos']);
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
