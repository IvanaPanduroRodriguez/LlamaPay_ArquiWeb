import { Injectable } from "@angular/core";
import { environment } from "../../enviroments/enviroment";
import { HttpClient } from "@angular/common/http";
import { Categoria } from "../models/categoria";
import { Subject } from "rxjs";

const base_url=environment.base;
@Injectable({
  providedIn: "root",  
})

export class CategoriaService {
  private listaCambio = new Subject<Categoria[]>(); //1er paso
  private url=`${base_url}/categorias`;
  constructor(private http: HttpClient) {}
  //listar categorias
  list(){
    return this.http.get<Categoria[]>(this.url);
  }
  //insertar categoria
  insert(c:Categoria){ //2do paso
    return this.http.post(this.url,c);
  }
  setList(listaNueva: Categoria[]) { //3er paso
    this.listaCambio.next(listaNueva);
  }
  getList() { //4to paso
    return this.listaCambio.asObservable();
  }
  //actualizar categoria
  listId(id: number) {
    return this.http.get<Categoria>(`${this.url}/${id}`)
  }

  update(c: Categoria) {
    return this.http.put(this.url, c)
  }
  //eliminar categoria
  deleteS(id:number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}