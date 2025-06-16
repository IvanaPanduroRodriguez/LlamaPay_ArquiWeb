import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { TiendaFr } from '../models/tienda';
import {Subject} from 'rxjs';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private url = `${base_url}/tiendas`
  private ListaCambio = new Subject<TiendaFr[]>()
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<TiendaFr[]>(this.url)
  }
  insert(t: TiendaFr) {
    return this.http.post(this.url, t)
  }

  setList(listaNueva: TiendaFr[]) {
    this.ListaCambio.next(listaNueva)
  }
  getList() {
    return this.ListaCambio.asObservable()
  }

  listId(id: number) {
    return this.http.get<TiendaFr>(`${this.url}/${id}`)
  }

  update(t: TiendaFr) {
    return this.http.put(this.url, t)
  }

  deleteT(id:number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
