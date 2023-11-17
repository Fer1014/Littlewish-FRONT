import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CurriculumVitae } from '../models/curriculum';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private url = `${base_url}/curriculumvitae`;
  private listaCambio = new Subject<CurriculumVitae[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<CurriculumVitae[]>(this.url);
  }

  insert(cv: CurriculumVitae) {
    return this.http.post(this.url, cv);
  }

  setList(listaNueva: CurriculumVitae[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<CurriculumVitae>(`${this.url}/${id}`);
  }
  update(cv: CurriculumVitae) {
    return this.http.put(this.url, cv);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
