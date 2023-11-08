import { Injectable } from '@angular/core';
import { Universidad } from '../models/universidad';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UniversidadService {
  private url = `${base_url}/universidad`;
  private listaCambio = new Subject<Universidad[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Universidad[]>(this.url);
  }
  insert(uni: Universidad) {
    return this.http.post(this.url, uni);
  }
  setList(listaNueva: Universidad[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Universidad>(`${this.url}/${id}`);
  }
  update(u: Universidad) {
    return this.http.put(this.url, u);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
