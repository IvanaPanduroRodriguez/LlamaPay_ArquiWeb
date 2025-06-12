import { Routes } from '@angular/router';
import { Categoria } from './components/categoria/categoria';

export const routes: Routes = [
  {
    path:'categorias',component:Categoria,
    //children:[{ path:'formulario',component:InsertareditarComponent}]
  }
];