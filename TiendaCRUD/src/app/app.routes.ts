import { Routes } from '@angular/router';
import {TiendaComponent} from './components/tienda/tienda';
import {Insertareditar} from './components/tienda/insertareditar/insertareditar';

export const routes: Routes = [
  {
    path:'tiendas',component:TiendaComponent,
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
