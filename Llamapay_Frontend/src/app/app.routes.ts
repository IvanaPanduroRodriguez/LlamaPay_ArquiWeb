
import { Categoria } from './components/categoria/categoria';
import { Servicio } from './components/servicio/servicio';
import { InsertareditarCategoria } from './components/categoria/insertareditar/insertareditar';
import { InsertareditarServicio } from './components/servicio/insertareditar/insertareditar';

import { Transaccion } from './components/transaccion/transaccion';
import { ListarTransaccion } from './components/transaccion/listar/listar';
import { InsertarEditarTransaccion } from './components/transaccion/insertareditar/insertareditar';
import { TipoTransaccion } from './components/tipotransaccion/tipotransaccion';
import { ListarTipoTransaccionComponent } from './components/tipotransaccion/listar/listar';
import { InsertarTipoTransaccionComponent } from './components/tipotransaccion/insertareditar/insertareditar';

import { TipoCuenta } from './components/tipocuenta/tipocuenta';
import { ListarTipoCuentaComponent } from './components/tipocuenta/listar/listar';
import { InsertareditarTipoCuentaComponent } from './components/tipocuenta/insertareditar/insertareditar';
import { Tienda } from './components/tienda/tienda';
import { Producto } from './components/producto/producto';
import { Insertareditarproducto } from './components/producto/insertareditarproducto/insertareditarproducto';
import { Insertareditartienda } from './components/tienda/insertareditartienda/insertareditartienda';
import { Buscartienda } from './components/tienda/buscartienda/buscartienda';
import { Buscarproducto } from './components/producto/buscarproducto/buscarproducto';
import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MetodoPago } from './components/metodopago/metodopago';
import { InsertareditarMetodoPago } from './components/metodopago/insertareditar/insertareditar';
import { InsertareditarUser } from './components/user/insertareditar/insertareditar';
import { User } from './components/user/user';
import { Rol } from './components/rol/rol';
import { InsertareditarRol } from './components/rol/insertareditar/insertareditar';
import { ObjetivoAhorro } from './components/objetivo-ahorro/objetivo-ahorro';
import { InsertareditarObjetivoAhorro } from './components/objetivo-ahorro/insertareditar/insertareditar';
import { Reportes } from './components/reportes/reportes';
import { Reportesmetodopago } from './components/reportes/reportesmetodopago/reportesmetodopago';
import { ReportesuserComponent } from './components/reportes/reportesuser/reportesuser';


export const routes: Routes = [
  {
    path: '', component: Landing // ← Landing page por defecto
  },
  {
    path: 'registro', component:RegisterComponent
  },
  { path: 'login', component: LoginComponent },
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
    path:'servicio', component:Servicio,
    children:[
      {
        path:'insertarservicio', component: InsertareditarServicio
      },
      {
        path:'ediciones/:id',component:InsertareditarServicio
      }
    ]
  },
 //-----------------JOHN------------------------------------------
  {
    path: 'metodopagos',
    component: MetodoPago,
    children: [
      { path: 'formularioM', component: InsertareditarMetodoPago },
      { path: 'ediciones/:id', component: InsertareditarMetodoPago }
    ]
  },
  {
    path: 'users',
    component: User,
    children: [
      { path: 'formularioU', component: InsertareditarUser },
      { path: 'ediciones/:id', component: InsertareditarUser }
    ]
  },
  {
    path: 'roles',
    component: Rol,
    children: [ 
      {
        path: 'formularioR', component: InsertareditarRol
      },
    ]

  },
  {
    path:'objetivoahorros',
    component: ObjetivoAhorro,
    children:[
      {
        path:'formularioOA',component: InsertareditarObjetivoAhorro
      }
    ]
  },
  {
    path:'reportes',component:Reportes,
    children:[
      {
        path:'metodospagosgrafica',component:Reportesmetodopago
      },
      {
        path:'graficUser',component:ReportesuserComponent
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
  },
  {
  path: 'tipocuenta', component:TipoCuenta,
  children: [
    { path: 'listar', component: ListarTipoCuentaComponent },
    { path: 'insertar', component: InsertareditarTipoCuentaComponent },
    { path: 'editar/:id', component: InsertareditarTipoCuentaComponent }
  ]
  },
  //-----------------CARLOS------------------------------------------

  {
    path: 'productos',component: Producto,
    children: [
      { path: 'formulario', component: Insertareditarproducto },
      { path: 'insertareditarproducto', component: Insertareditarproducto },
      { path: 'buscarproducto', component: Buscarproducto }
    ]
  },
  {
    path: 'tiendas',
    component: Tienda,
    children: [
      { path: 'formulario', component: Insertareditartienda },
      { path: 'insertareditartienda', component: Insertareditartienda },
      { path: 'buscartienda', component: Buscartienda }
    ]
  }
];
