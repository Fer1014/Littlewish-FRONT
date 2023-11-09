import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pago } from '../models/pago';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
}) 

export class PagoService {
  private url = `${base_url}/pagos`;
  private ListaCambio = new Subject<Pago[]>();
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Pago[]>(this.url);
  }
  insert(p: Pago) {
    return this.http.post(this.url, p);
  }
  setList(ListaNueva: Pago[]) {
    this.ListaCambio.next(ListaNueva);
  }
  getList() {
    return this.ListaCambio.asObservable();
  }
}
