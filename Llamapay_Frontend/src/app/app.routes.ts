import { Routes } from '@angular/router';
import { Categoria } from './components/categoria/categoria';
import { Insertareditar } from './components/categoria/insertareditar/insertareditar';

export const routes: Routes = [
  {
    path:'categorias',component:Categoria,
    children:[
      { 
        path:'formulario',component:Insertareditar
      }
    ]
  }
];