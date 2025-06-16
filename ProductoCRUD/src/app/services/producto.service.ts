import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import {Subject} from 'rxjs';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private listaCambio = new Subject<Producto[]>()
  private url = `${base_url}/productos`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Producto[]>(this.url)
  }
  insert(p: Producto) {
    return this.http.post(this.url, p)
  }

  setList(listaNueva: Producto[]) {
    this.listaCambio.next(listaNueva)
  }
  getList() {
    return this.listaCambio.asObservable()
  }

  listId(id: number) {
    return this.http.get<Producto>(`${this.url}/${id}`)
  }

  update(p: Producto) {
    return this.http.put(this.url, p)
  }

  deleteP(id:number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
