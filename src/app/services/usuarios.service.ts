import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../models/usuarios';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = `${base_url}/users`;
  private listaCambio = new Subject<Usuarios[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Usuarios[]>(this.url);
  }

  insert(uni: Usuarios) {
    return this.http.post(this.url, uni);
  }

  setList(listaNueva: Usuarios[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Usuarios>(`${this.url}/${id}`);
  }
  update(u: Usuarios) {
    return this.http.put(this.url, u);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
