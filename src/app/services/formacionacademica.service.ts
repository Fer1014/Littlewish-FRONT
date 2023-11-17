import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormacionAcademica } from '../models/formacionacademica';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class FormacionacademicaService {
  private url = `${base_url}/formacionacademica`;
  private listaCambio = new Subject<FormacionAcademica[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<FormacionAcademica[]>(this.url);
  }

  insert(fa: FormacionAcademica) {
    return this.http.post(this.url, fa);
  }

  setList(listaNueva: FormacionAcademica[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
