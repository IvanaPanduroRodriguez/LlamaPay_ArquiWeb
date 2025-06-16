import { Injectable } from "@angular/core";
import { environment } from "../../enviroments/enviroment";
import { HttpClient } from "@angular/common/http";
import { MetodoPago } from "../models/metodopago";
import { Subject } from "rxjs";

const base_url=environment.base;
@Injectable({
  providedIn: "root",  
})
export class MetodoPagoService{
    private listaCambio = new Subject<MetodoPago[]>(); //1er paso
    private url=`${base_url}/metodospagos`;
    constructor(private http: HttpClient) {}
    list(){
        return this.http.get<MetodoPago[]>(this.url);
      }
      //insertar MetodoPago
      insert(mp:MetodoPago){ //2do paso
        return this.http.post(this.url,mp);
      }
      setList(listaNueva: MetodoPago[]) { //3er paso
        this.listaCambio.next(listaNueva);
      }
      getList() { //4to paso
        return this.listaCambio.asObservable();
      }
      listId(id:number){
        return this.http.get<MetodoPago>(`${this.url}/${id}`)
      }
      update(mp: MetodoPago) {
        return this.http.put(this.url, mp)
      }

      deleteS(id:number) {
        return this.http.delete(`${this.url}/${id}`)
      }
}