import { User } from './user';
import { Tienda } from './tienda';

export class Producto {
  Producto_id: number=0;;
  Nombre_producto: string="";
  Descripcion: string="";
  Unidad_medida: string="";
  Precio_Producto:number=0;;
  us: User= new User();
  td: Tienda= new Tienda();
}