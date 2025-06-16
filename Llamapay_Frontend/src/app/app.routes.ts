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

import { Transaccion } from './components/finanzas/transaccion/transaccion';
import { ListarTransaccion } from './components/finanzas/transaccion/listar/listar';
import { InsertarEditarTransaccion } from './components/finanzas/transaccion/insertareditar/insertareditar';
import { TipoTransaccion } from './components/finanzas/tipotransaccion/tipotransaccion';
import { ListarTipoTransaccionComponent } from './components/finanzas/tipotransaccion/listar/listar';
import { InsertarTipoTransaccionComponent } from './components/finanzas/tipotransaccion/insertareditar/insertareditar';




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
  },

  {
    path: 'finanzas',component: Transaccion,
    children: [
      { path: 'listar', component: ListarTransaccion },
      { path: 'insertar', component: InsertarEditarTransaccion }
    ]
  },
  {
    path: 'tipotransaccion',
    component: TipoTransaccion,
    children: [
      { path: 'listar', component: ListarTipoTransaccionComponent },
      { path: 'insertar', component: InsertarTipoTransaccionComponent }
    ]
  },
  { path: '', redirectTo: 'finanzas', pathMatch: 'full' }


];