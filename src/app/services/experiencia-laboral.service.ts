import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaLaboral } from '../models/experiencia_laboral';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  private API_URL = `${base_url}/experiencia_laboral`;
  private listaCambio = new Subject<ExperienciaLaboral[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<ExperienciaLaboral[]> {
    return this.http.get<ExperienciaLaboral[]>(this.API_URL);
  }

  insert(experienciaLaboral: ExperienciaLaboral) {
    return this.http.post(this.API_URL, experienciaLaboral);
  }

  setList(listaNueva: ExperienciaLaboral[]): void {
    this.listaCambio.next(listaNueva);
  }

  getList(): Observable<ExperienciaLaboral[]> {
    return this.listaCambio.asObservable();
  }

  delete(id: number) {
    return this.http.delete(`${this.API_URL}?id=${id}`);
  }

  update(experienciaLaboral: ExperienciaLaboral) {
    return this.http.put(this.API_URL, experienciaLaboral);
  }
  listId(id_Experiencia_laboral: number): Observable<ExperienciaLaboral> {
    return this.http.get<ExperienciaLaboral>(`${this.API_URL}/${id_Experiencia_laboral}`);
  }
}
