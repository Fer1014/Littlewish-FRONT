// comment.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/evironment';
import { Comentario } from '../models/comentario-puntuacion';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = `${base_url}/comentario `;
  comentarios: string[] = [];
  private listaCambio = new Subject<Comentario[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Comentario[]>(this.url);
  }

  insert(c: Comentario) {
    return this.http.post(this.url, c);
  }

  setList(listaNueva: Comentario[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}

