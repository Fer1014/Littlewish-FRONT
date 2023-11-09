import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Certificaciones } from '../models/certificacion';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CertificacionService {
  private API_URL = `${base_url}/certificaciones`;
  private listaCambio = new Subject<Certificaciones[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<Certificaciones[]> {
    return this.http.get<Certificaciones[]>(this.API_URL);
  }

  insert(certificacion: Certificaciones): Observable<any> {
    return this.http.post(this.API_URL, certificacion);
  }

  setList(listaNueva: Certificaciones[]): void {
    this.listaCambio.next(listaNueva);
  }

  getList(): Observable<Certificaciones[]> {
    return this.listaCambio.asObservable();
  }

  listId(id_Certificaciones: number): Observable<Certificaciones> {
    return this.http.get<Certificaciones>(`${this.API_URL}/${id_Certificaciones}`);
  }

  update(certificacion: Certificaciones): Observable<any> {
    return this.http.put(this.API_URL, certificacion);
  }

  delete(id_Certificaciones: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id_Certificaciones}`);
  }
}
