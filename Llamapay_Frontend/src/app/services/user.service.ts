import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";

const base_url=environment.base;
@Injectable({
  providedIn: "root",  
})

export class UserService {
private listaCambio = new Subject<User[]>(); //1er paso
  private url=`${base_url}/users`;
  constructor(private http: HttpClient) {}
  //listar categorias
  list(){
        return this.http.get<User[]>(this.url);
        }
        //insertar user
    insert(c:User){ //2do paso
        return this.http.post(this.url,c);
        }
    setList(listaNueva: User[]) { //3er paso
        this.listaCambio.next(listaNueva);
        }
    getList() { //4to paso
        return this.listaCambio.asObservable();
        }
}