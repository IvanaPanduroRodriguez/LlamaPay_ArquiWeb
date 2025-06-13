import { Injectable } from "@angular/core";
import { environment } from "../../enviroments/enviroment";
import { HttpClient } from "@angular/common/http";
import { Rol } from "../models/rol";
import { Subject } from "rxjs";

const base_url=environment.base;
@Injectable({
  providedIn: "root",  
})
export class RolService{
    private listaCambio = new Subject<Rol[]>(); //1er paso
    private url=`${base_url}/roles`;
    constructor(private http: HttpClient) {}
    list(){
        return this.http.get<Rol[]>(this.url);
      }
      //insertar Rol
      insert(c:Rol){ //2do paso
        return this.http.post(this.url,c);
      }
      setList(listaNueva: Rol[]) { //3er paso
        this.listaCambio.next(listaNueva);
      }
      getList() { //4to paso
        return this.listaCambio.asObservable();
      }
}