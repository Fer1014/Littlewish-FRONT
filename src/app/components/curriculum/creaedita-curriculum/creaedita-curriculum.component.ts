import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CurriculumVitae } from 'src/app/models/curriculum';
import { FormacionAcademica } from 'src/app/models/formacionacademica';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { FormacionacademicaService } from 'src/app/services/formacionacademica.service';

@Component({
  selector: 'app-creaedita-curriculum',
  templateUrl: './creaedita-curriculum.component.html',
  styleUrls: ['./creaedita-curriculum.component.css']
})
export class CreaeditaCurriculumComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  curriculum: CurriculumVitae = new CurriculumVitae();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaFA: FormacionAcademica[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private faS: FormacionacademicaService,
    private cvS: CurriculumService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
    this.id = data['id'];
    this.edicion = data['id'] != null;
    this.init();
    });
    this.form = this.formBuilder.group({
      idCv: [''],
      formacionAcademica: ['', Validators.required],
    });
    this.faS.list().subscribe((data) => {
      this.listaFA = data;
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.curriculum.idCv = this.form.value.idCv
      this.curriculum.formacionAcademica.idFormacionAcademica = this.form.value.formacionAcademica;
      if (this.edicion) {
        this.cvS.update(this.curriculum).subscribe(() => {
          this.cvS.list().subscribe((data) => {
            this.cvS.setList(data);
          });
        });
      } else {
        this.cvS.insert(this.curriculum).subscribe((data) => {
          this.cvS.list().subscribe((data) => {
            this.cvS.setList(data);
          });
        });
      }
      this.router.navigate(['curriculum']);
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
      this.cvS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idCv: new FormControl(data.idCv),
          formacionAcademica: new FormControl(data.formacionAcademica),
        });
      });
    }
  }
}
