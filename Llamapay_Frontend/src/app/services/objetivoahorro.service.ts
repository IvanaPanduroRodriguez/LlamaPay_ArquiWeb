import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { environment } from "../../environments/environment"; 
=======
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
import { HttpClient } from "@angular/common/http";
import { ObjetivoAhorro} from '../models/objetivoahorro'
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";

const base_url= environment.base;

@Injectable({
  providedIn: "root",  
})

export class ObjetivoAhorroService {
    private url = `${base_url}/ObjetivoAhorro`
    private listaCambio = new Subject<ObjetivoAhorro[]>()

    constructor(private http: HttpClient) { }

        list() {
        return this.http.get<ObjetivoAhorro[]>(this.url);
        }
        insert(o: ObjetivoAhorro) {
            return this.http.post(`${this.url}/registrarobjetivoAhorro`, o);
        }
        getList() {
            return this.listaCambio.asObservable();
        }
        setList(listaNueva: ObjetivoAhorro[]) {
            this.listaCambio.next(listaNueva);
        }
        deleteS(id: number) {
            return this.http.delete(`${this.url}/${id}`);
        }
        listaId(userId: number) {
            return this.http.get<ObjetivoAhorro>(`${this.url}/${userId}`);
        }
        update(o: ObjetivoAhorro) {
            return this.http.put(`${this.url}/actualizar`, o);
        }

}