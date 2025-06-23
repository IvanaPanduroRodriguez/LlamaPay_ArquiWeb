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

import { Transaccion } from './components/transaccion/transaccion';
import { ListarTransaccion } from './components/transaccion/listar/listar';
import { InsertarEditarTransaccion } from './components/transaccion/insertareditar/insertareditar';
import { TipoTransaccion } from './components/tipotransaccion/tipotransaccion';
import { ListarTipoTransaccionComponent } from './components/tipotransaccion/listar/listar';
import { InsertarTipoTransaccionComponent } from './components/tipotransaccion/insertareditar/insertareditar';
import { Tienda } from './components/tienda/tienda';
import { Listartienda } from './components/tienda/listartienda/listartienda';
import { Insertareditartienda } from './components/tienda/insertareditartienda/insertareditartienda';


export const routes: Routes = [
  //-----------------IVANA------------------------------------------
  {
    path:'categorias',component:Categoria,
    children:[
      { 
        path:'insertarcategoria',component:InsertareditarCategoria
      },
      {
        path:'ediciones/:id',component:InsertareditarCategoria
      }
    ]

  },

  {
    path:'servicios', component:Servicio,
    children:[
      {
        path:'insertarservicio', component: InsertareditarServicio
      },
      {
        path:'ediciones/:id',component:InsertareditarServicio
      }
    ]
  },
 //-----------------JHON------------------------------------------
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
//-----------------JOAO------------------------------------------
  {
    path: 'transaccion',component: Transaccion,
    children: [
      { path: 'listar', component: ListarTransaccion },
      { path: 'insertar', component: InsertarEditarTransaccion }
    ]
  },
  {
    path: 'tipotransaccion',component: TipoTransaccion,
    children: [
      { path: 'listar', component: ListarTipoTransaccionComponent },
      { path: 'insertar', component: InsertarTipoTransaccionComponent }
    ]
  }
  //-----------------CARLOS------------------------------------------

    ,{
    path: 'tiendas',component: Tienda,
    children: [
      { path: 'listartienda', component: Listartienda },
      { path: 'insertareditartienda', component: Insertareditartienda }
    ]
  },
  {
    path: 'tipotransaccion',component: TipoTransaccion,
    children: [
      { path: 'listar', component: ListarTipoTransaccionComponent },
      { path: 'insertar', component: InsertarTipoTransaccionComponent }
    ]
  }

];