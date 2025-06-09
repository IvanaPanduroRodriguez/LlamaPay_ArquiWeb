import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { TiendaFr } from '../models/tienda';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private url = `${base_url}/tiendas`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<TiendaFr[]>(this.url)
  }
}
