import { Categoria } from "./categoria";

export class Servicio {
    idService: number = 0;
    nameService: string = "";
    nameCompanyService: string = "";
    category!:Categoria // Relación con la clase Categoria
}