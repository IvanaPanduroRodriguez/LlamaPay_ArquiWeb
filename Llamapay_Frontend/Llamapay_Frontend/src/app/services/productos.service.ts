import {Subject} from 'rxjs';
import { Injectable } from '@angular/core';
import { Producto } from '../models/productos'; 
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({   
    providedIn: 'root'
    })
export class ProductosService {
    private url = `${base_url}/productos`;
    private listaCambio = new Subject<Producto[]>();
    constructor(private http: HttpClient) { }
    list() {
        return this.http.get<Producto[]>(this.url);
    }

    insert(p:Producto) {
        return this.http.post(this.url, p);
    }

    setList(listaNueva: Producto[]) {
        this.listaCambio.next(listaNueva);
    }
    listId(id: number) {
        return this.http.get<Producto>(`${this.url}/${id}`)
      }
    getList() {
        return this.listaCambio.asObservable();
    }
      update(p:Producto) {
        return this.http.put(this.url, p)
      }
      deleteS(id:number) {
        return this.http.delete(`${this.url}/${id}`)
    }
    searchProducto(p:string){
    return this.http.get<Producto[]>(`${this.url}/buscar/${p}`)
    }
}