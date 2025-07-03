import { Injectable } from "@angular/core";
import { environment } from "../../enviroments/enviroment";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Subject } from "rxjs";
import { SerchingUserForYearBirthdayDTO } from "../models/serchinguserforyearbirthdayDTO";

const base_url = environment.base;

@Injectable({
  providedIn: "root",
})
export class UserService {
  private listaCambio = new Subject<User[]>();
  private url = `${base_url}/users`;

  constructor(private http: HttpClient) {}

  // Listar todos los usuarios
  list() {
    return this.http.get<User[]>(this.url);
  }

  // Insertar nuevo usuario
  insert(u: User) {
    return this.http.post(`${this.url}/register-user`, u);
  }

  // Actualizar usuario
  update(u: User) {
    return this.http.put(this.url, u);
  }

  // Obtener usuario por ID
  listId(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  // Eliminar usuario por ID
  deleteS(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // Obtener usuario por username (para PERFIL)
  findByUsername(username: string) {
    return this.http.get<User>(`${this.url}/username/${username}`);
  }

  // Gestionar cambios en la lista observable (para listas reactivas)
  setList(listaNueva: User[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  // Reporte de cumpleaños por rango de fechas
  getBirthdaysByRange(inicio: string, fin: string) {
    const params = { inicio, fin };
    return this.http.get<SerchingUserForYearBirthdayDTO[]>(
      `${this.url}/searching-Date-years-users`,
      { params }
    );
  }
}
