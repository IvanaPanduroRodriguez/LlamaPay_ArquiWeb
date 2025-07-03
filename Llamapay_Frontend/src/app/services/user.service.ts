import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { environment } from "../../environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Subject } from "rxjs";
import { SerchingUserForYearBirthdayDTO } from "../models/serchinguserforyearbirthdayDTO";
=======
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { SerchingUserForYearBirthdayDTO } from "../models/serchinguserforyearbirthdayDTO";

>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98

const base_url=environment.base;
@Injectable({
  providedIn: "root",  
})

export class UserService {
private listaCambio = new Subject<User[]>(); //1er paso
  private url=`${base_url}/users`;
  constructor(private http: HttpClient) {}
  
  list(){
        return this.http.get<User[]>(this.url);
        }
        //insertar user
    insert(u:User){ //2do paso
        return this.http.post(`${this.url}/register-user`,u);
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
    getBirthdaysByRange(inicio: string, fin: string) {
  const params = { inicio, fin };
<<<<<<< HEAD
  return this.http.get<SerchingUserForYearBirthdayDTO[]>(`${this.url}/Searching-Date-years-users`, { params });
=======
  return this.http.get<SerchingUserForYearBirthdayDTO[]>(`${this.url}/searching-Date-years-users`, { params });
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
}
}