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
import { Listarrol } from './components/rol/listarrol/listarrol';
import { Listarobjetivoahorro } from './components/objetivo-ahorro/listarobjetivoahorro/listarobjetivoahorro';
import { Transaccion } from './components/transaccion/transaccion';
import { ListarTransaccion } from './components/transaccion/listar/listar';
import { InsertarEditarTransaccion } from './components/transaccion/insertareditar/insertareditar';
import { TipoTransaccion } from './components/tipotransaccion/tipotransaccion';
import { ListarTipoTransaccionComponent } from './components/tipotransaccion/listar/listar';
import { InsertarTipoTransaccionComponent } from './components/tipotransaccion/insertareditar/insertareditar';
import { Rol } from './components/rol/rol';
import { InsertareditarRol } from './components/rol/insertareditar/insertareditar';
import { ObjetivoAhorro } from './components/objetivo-ahorro/objetivo-ahorro';
import { InsertareditarObjetivoAhorro } from './components/objetivo-ahorro/insertareditar/insertareditar';
import { Reportes } from './components/reportes/reportes';
import { Reportesmetodopago } from './components/reportes/reportesmetodopago/reportesmetodopago';
import { ReportesuserComponent } from './components/reportes/reportesuser/reportesuser';
import { Tipocuenta } from './components/tipocuenta/tipocuenta';
import { ListarTipoCuentaComponent } from './components/tipocuenta/listar/listar';
import { InsertareditarTipoCuentaComponent } from './components/tipocuenta/insertareditar/insertareditar';
import { Landing } from './components/landing/landing';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Tipocuenta } from './components/tipocuenta/tipocuenta';
import { Listar } from './components/tipocuenta/listar/listar';
import { Insertareditar } from './components/tipocuenta/insertareditar/insertareditar';
import { Producto } from './components/producto/producto';
import { Insertareditarproducto } from './components/producto/insertareditarproducto/insertareditarproducto';
import { Buscarproducto } from './components/producto/buscarproducto/buscarproducto';
import { Buscartienda } from './components/tienda/buscartienda/buscartienda';
import { Insertareditartienda } from './components/tienda/insertareditartienda/insertareditartienda';
import { Tienda } from './components/tienda/tienda';


export const routes: Routes = [
  {
    path:'',redirectTo:'users',pathMatch:'full'
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
    path:'metodopagos',component:MetodoPago,
    children:[
      {
        path:'formularioM',component:InsertareditarMetodoPago
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
        path:'formularioU',component:InsertareditarUser
      },
      {
        path:'listado',component:Listaruser
      }
    ]
  },
  {
    path:'roles',component:Rol,
    children:[
      {
        path:'formularioR',component:InsertareditarRol
      },
      {
        path:'listado',component:Listarrol
      }
    ]
  },
  {
    path:'objetivoahorros',component:ObjetivoAhorro,
    children:[
      {
        path:'formularioOA',component:InsertareditarObjetivoAhorro
      },
      {
        path:'listado',component:Listarobjetivoahorro
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
  path: 'tipocuenta', component:Tipocuenta,
  children: [
    { path: 'listar', component: Listar },
    { path: 'insertar', component: Insertareditar },
    { path: 'editar/:id', component: Insertareditar }
  ]
  },

 // -----------------------------------------CARLOS-------------------------------
  {
    path: 'productos',component: Producto,
    children: [
      { path: 'formularioP', component: Insertareditarproducto },
      { path: 'editar/:id', component: Insertareditarproducto },
      { path: 'buscarproducto', component: Buscarproducto }
    ]
  },
  {
    path: 'tiendas',
    component: Tienda,
    children: [
      { path: 'formularioT', component: Insertareditartienda },
      { path: 'editar/:id', component: Insertareditartienda },
      { path: 'buscartienda', component: Buscartienda }
    ]
  }

];
