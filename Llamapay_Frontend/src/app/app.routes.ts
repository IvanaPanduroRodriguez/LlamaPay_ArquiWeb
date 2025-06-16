import { Routes } from '@angular/router';
import { Categoria } from './components/categoria/categoria';
import { Servicio } from './components/servicio/servicio';
import { InsertareditarCategoria } from './components/categoria/insertareditar/insertareditar';
import { InsertareditarServicio } from './components/servicio/insertareditar/insertareditar';

import { MetodoPago } from './components/metodopago/metodopago';
import { InsertareditarMetodoPago } from './components/metodopago/insertareditar/insertareditar';
import { Listarmetodopago } from './components/metodopago/listarmetodopago/listarmetodopago';
import { User } from './components/user/user';
import { InsertareditarUser } from './components/user/insertareditar/insertareditar';
import { Listaruser } from './components/user/listaruser/listaruser';



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
  },

  {
    path:'metodopagos',component:MetodoPago,
    children:[
      {
        path:'formulario',component:InsertareditarMetodoPago
      },
      {
        path:'listado',component:Listarmetodopago
      }
    ]
  },
  {
    path:'users',component:User,
    children:[
      {
        path:'formulario',component:InsertareditarUser
      },
      {
        path:'listado',component:Listaruser
      }
    ]
  }


];