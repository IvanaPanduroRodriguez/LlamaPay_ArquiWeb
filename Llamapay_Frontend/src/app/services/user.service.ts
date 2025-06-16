import { Injectable } from "@angular/core";
import { environment } from "../../enviroments/enviroment";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Subject } from "rxjs";

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
    insert(u:User){ //2do paso
        return this.http.post(this.url,u);
        }
    setList(listaNueva: User[]) { //3er paso
        this.listaCambio.next(listaNueva);
        }
    getList() { //4to paso
        return this.listaCambio.asObservable();
        }
    listId(id: number) {
      return this.http.get<User>(`${this.url}/${id}`)
    }

    update(u: User) {
      return this.http.put(this.url, u)
    }

    deleteS(id:number) {
      return this.http.delete(`${this.url}/${id}`)
    }
    
}