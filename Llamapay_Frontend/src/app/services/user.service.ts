import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";

import { User } from "../models/user";
import { SerchingUserForYearBirthdayDTO } from "../models/serchinguserforyearbirthdayDTO";

const base_url = environment.base;

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url = `${base_url}/users`;
  private listaCambio = new Subject<User[]>(); // Subject para sincronizar lista

  constructor(private http: HttpClient) {}

  // ------------------ CRUD ------------------

  list() {
    return this.http.get<User[]>(this.url);
  }

  listId(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  insert(user: User) {
    return this.http.post<void>(`${this.url}/register-user`, user);
  }

  update(user: User) {
    return this.http.put(this.url, user);
  }

  deleteS(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // ------------------ Sincronización de Lista ------------------

  setList(listaNueva: User[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  // ------------------ Consultas Personalizadas ------------------

  getBirthdaysByRange(inicio: string, fin: string) {
    const params = { inicio, fin };
    return this.http.get<SerchingUserForYearBirthdayDTO[]>(`${this.url}/Searching-Date-years-users`, { params });
  }

  findByUsername(username: string) {
    return this.http.get<User>(`${this.url}/username/${username}`);
  }

  // ------------------ Métodos de Sesión ------------------

  getUserRole(): string {
    const stored = sessionStorage.getItem('rol');
    return stored ? stored.replace(/"/g, '') : '';
  }

  getUsername(): string {
    const stored = sessionStorage.getItem('username');
    return stored ? stored.replace(/"/g, '') : '';
  }
}
