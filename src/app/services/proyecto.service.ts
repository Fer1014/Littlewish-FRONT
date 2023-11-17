import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyecto';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url = `${base_url}/pagos`;
  private ListaCambio = new Subject<Proyecto[]>();
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Proyecto[]>(this.url);
  }
  insert(p: Proyecto) {
    return this.http.post(this.url, p);
  }
  setList(ListaNueva: Proyecto[]) {
    this.ListaCambio.next(ListaNueva);
  }
  getList() {
    return this.ListaCambio.asObservable();
  }

}
