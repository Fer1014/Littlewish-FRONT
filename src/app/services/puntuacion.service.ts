import { Injectable } from '@angular/core';
import { Puntuacion } from '../models/puntuacion';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {

  private url = `${base_url}/puntuacion`;
  private listaCambio = new Subject<Puntuacion[]>();
  
  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');
    this.http.get<Puntuacion[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
    return this.http.get<Puntuacion[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    }); 
  }

  setList(listaNueva: Puntuacion[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  insert(p: Puntuacion) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, p, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  listbyUser(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Puntuacion[]>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }



}
