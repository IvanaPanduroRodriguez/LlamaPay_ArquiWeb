import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaccion } from '../models/transaccion';
import { Subject } from 'rxjs'; 
import { environment } from "../../environments/environment";

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private url = `${base_url}/transacciones`;
  private listarCambio = new Subject<Transaccion[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Transaccion[]>(this.url);
  }

  insert(t: Transaccion) {
    return this.http.post(this.url + '/registrar', t);  // Nota: segun el controller, usa /registrar
  }

  setList(listaNueva: Transaccion[]) {
    this.listarCambio.next(listaNueva);
  }

  getList() {
    return this.listarCambio.asObservable();
  }
}
