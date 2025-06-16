import { Routes } from '@angular/router';
import {ProductoComponent} from './components/producto/producto';
import {Insertareditar} from './components/producto/insertareditar/insertareditar';
export const routes: Routes = [
  {
    path:'tiendas',component:ProductoComponent,
    children:[
      {
        path:'formulario',component:Insertareditar
      },
      {
        path:'ediciones/:id',component:Insertareditar
      }
    ]
  }


];
