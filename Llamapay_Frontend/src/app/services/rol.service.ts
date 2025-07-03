import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { environment } from "../../environments/environment"; 
=======
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
import { HttpClient } from "@angular/common/http";
import { Rol } from "../models/rol";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";

const base_url=environment.base;

@Injectable({
  providedIn: "root",  
})
export class RolService{
    private url = `${base_url}/roles`;
    private listaCambio = new Subject<Rol[]>();
    constructor(private http: HttpClient) { }
    list() {
    return this.http.get<Rol[]>(this.url);
    }
    insert(r: Rol) {
        return this.http.post(`${this.url}/registrar`, r);
    }
    getList() {
        return this.listaCambio.asObservable();
    }
    setList(listaNueva: Rol[]) {
        this.listaCambio.next(listaNueva);
    }
    deleteS(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
    listaId(id: number) {
        return this.http.get<Rol>(`${this.url}/${id}`);
    }
    update(r: Rol) {
        return this.http.put(this.url, r);
    }

}