import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { idioma } from '../models/idioma';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  private API_URL = `${base_url}/idiomas`;
  private listaCambio = new Subject<idioma[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<idioma[]> {
    return this.http.get<idioma[]>(this.API_URL);
  }

  insert(idioma: idioma){
    return this.http.post(this.API_URL, idioma);
  }

  setList(listaNueva: idioma[]): void {
    this.listaCambio.next(listaNueva);
  }

  getList(): Observable<idioma[]> {
    return this.listaCambio.asObservable();
  }

  listId(id: number){
    return this.http.get<idioma>(`${this.API_URL}/${id}`);
  }

  update(idioma: idioma) {
    return this.http.put(this.API_URL, idioma);
  }

  delete(id: number){
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
