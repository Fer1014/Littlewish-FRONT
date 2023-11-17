import { Injectable } from '@angular/core';
import { Tarjeta } from '../models/tarjeta';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  private url = `${base_url}/usuarios`;
  private ListaCambio = new Subject<Tarjeta[]>();
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<Tarjeta[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(smvoIn: Tarjeta) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, smvoIn ,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  setList(ListaNueva: Tarjeta[]) {
    this.ListaCambio.next(ListaNueva);
  }
  getList() {
    return this.ListaCambio.asObservable();
  }
  listarId(id: number) {
    return this.http.get<Tarjeta>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  modificar(de: Tarjeta) {
    return this.http.put(this.url, de);
  }
  update(u: Tarjeta) {
    return this.http.put(this.url, u);
  }
}
