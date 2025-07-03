import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { environment } from "../../environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { MetodoPago } from "../models/metodopago";
import { Observable, Subject } from "rxjs";
import { ObtenerMetodosPagosPorUsersDTO } from "../models/obtenermetodospagosporusersDTO";
=======
import { HttpClient } from "@angular/common/http";
import { MetodoPago } from "../models/metodopago";
import { Observable, Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { ObtenerMetodosPagosPorUsersDTO } from "../models/obtenermetodospagosporusersDTO";

>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98

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

getQuantitymetodspayforusers(userId: number): Observable<ObtenerMetodosPagosPorUsersDTO[]> {
  return this.http.get<ObtenerMetodosPagosPorUsersDTO[]>(
    `${this.url}/buscar-metodos-pagos-users`,
    { params: { userId: userId.toString() } }
  );
}
}