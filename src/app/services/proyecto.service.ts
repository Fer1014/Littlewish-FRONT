import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proyectos } from '../models/proyecto';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url = `${base_url}/proyectos`;
  private ListaCambio = new Subject<Proyectos[]>();
  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<Proyectos[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(p: Proyectos) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, p, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  setList(ListaNueva: Proyectos[]) {
    this.ListaCambio.next(ListaNueva);
  }
  getList() {
    return this.ListaCambio.asObservable();
  }

}
