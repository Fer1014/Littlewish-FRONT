import { Injectable } from '@angular/core';
import { Tarjeta } from '../models/tarjeta';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  private url = `${base_url}/usuarios`;
  private ListaCambio = new Subject<Tarjeta[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Tarjeta[]>(this.url);
  }
  insert(smvoIn: Tarjeta) {
    return this.http.post(this.url, smvoIn);
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
