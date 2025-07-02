import { Categoria } from "./categoria";

export class Servicio {
    idService: number = 0;
    nameCompanyService: string = "";
    nameService: string = "";
    category: Categoria = new Categoria(); // Relación con la clase Categoria
}