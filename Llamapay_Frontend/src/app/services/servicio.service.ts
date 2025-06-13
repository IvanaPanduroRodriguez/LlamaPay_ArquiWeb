import { Injectable } from "@angular/core";
import { environment } from "../../enviroments/enviroment";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Servicio } from '../models/servicio';

const base_url=environment.base;
@Injectable({
  providedIn: "root",  
})

export class ServicioService {
  private listaCambio = new Subject<Servicio[]>(); //1er paso
  private url=`${base_url}/servicios`;
  constructor(private http: HttpClient) {}
  //listar servicios
  list(){
    return this.http.get<Servicio[]>(this.url); 
  }
  //insertar servicio
  insert(s:Servicio){ //2do paso
    return this.http.post(this.url,s);
  }
  setList(listaNueva: Servicio[]) { //3er paso
    this.listaCambio.next(listaNueva);
 }
  getList() { //4to paso
    return this.listaCambio.asObservable();
  }
}