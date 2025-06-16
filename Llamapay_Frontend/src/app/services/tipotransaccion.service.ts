import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoTransaccion } from '../models/tipotransaccion';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoTransaccionService {
  private url: string = `${environment.base}/tipotransacciones`;

  private listaCambio: TipoTransaccion[] = [];

  constructor(private http: HttpClient) {}

  list(): Observable<TipoTransaccion[]> {
    return this.http.get<TipoTransaccion[]>(this.url);
  }

  insert(tipo: TipoTransaccion): Observable<void> {
    return this.http.post<void>(this.url, tipo);
  }

  setList(lista: TipoTransaccion[]) {
    this.listaCambio = lista;
  }

  getList() {
    return this.listaCambio;
  }
}
