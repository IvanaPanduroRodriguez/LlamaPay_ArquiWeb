import { Routes } from '@angular/router';
import { Categoria } from './components/categoria/categoria';
import { Servicio } from './components/servicio/servicio';
import { InsertareditarCategoria } from './components/categoria/insertareditar/insertareditar';
import { InsertareditarServicio } from './components/servicio/insertareditar/insertareditar';

export const routes: Routes = [
  {
    path:'categorias',component:Categoria,
    children:[
      { 
        path:'insertarcategoria',component:InsertareditarCategoria
      }
    ]

  },
  {
    path:'servicios', component:Servicio,
    children:[
      {
        path:'insertarservicio', component: InsertareditarServicio
      }
    ]
  }
];