import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MetodoPago } from "../models/metodopago";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";

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
}