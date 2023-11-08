import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Carrera } from '../models/carrera';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private url = `${base_url}/carreras`;
  private listaCambio = new Subject<Carrera[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Carrera[]>(this.url);
  }
  insert(car: Carrera) {
    return this.http.post(this.url, car);
  }
  setList(listaNueva: Carrera[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Carrera>(`${this.url}/${id}`);
  }
  update(c: Carrera) {
    return this.http.put(this.url, c);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
