import { Injectable } from "@angular/core";
import { environment } from "../../enviroments/enviroment";
import { HttpClient } from "@angular/common/http";
import { Categoria } from "../models/categoria";

const base_url=environment.base;
@Injectable({
  providedIn: "root",  
})

export class CategoriaService {
  private url=`${base_url}/categorias`;
  constructor(private http: HttpClient) {}
  //listar categorias
  list(){
    return this.http.get<Categoria[]>(this.url);
  }
}