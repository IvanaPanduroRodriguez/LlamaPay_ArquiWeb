import { Routes } from '@angular/router';
import { Categoria } from './components/categoria/categoria';
import { Servicio } from './components/servicio/servicio';
import { InsertareditarCategoria } from './components/categoria/insertareditar/insertareditar';
import { InsertareditarServicio } from './components/servicio/insertareditar/insertareditar';
import { MetodoPago } from './components/metodopago/metodopago';
import { InsertareditarMetodoPago } from './components/metodopago/insertareditar/insertareditar';
import { User } from './components/user/user';
import { InsertareditarUser } from './components/user/insertareditar/insertareditar';
import { Transaccion } from './components/transaccion/transaccion';
import { ListarTransaccion } from './components/transaccion/listar/listar';
import { InsertarEditarTransaccion } from './components/transaccion/insertareditar/insertareditar';
import { TipoTransaccion } from './components/tipotransaccion/tipotransaccion';
import { ListarTipoTransaccionComponent } from './components/tipotransaccion/listar/listar';
import { InsertarEditarTipoTransaccionComponent } from './components/tipotransaccion/insertareditar/insertareditar';
import { Rol } from './components/rol/rol';
import { InsertareditarRol } from './components/rol/insertareditar/insertareditar';
import { ObjetivoAhorro } from './components/objetivo-ahorro/objetivo-ahorro';
import { InsertareditarObjetivoAhorro } from './components/objetivo-ahorro/insertareditar/insertareditar';
import { Landing } from './components/landing/landing';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Reportesmetodopago } from './components/reportes/reportesmetodopago/reportesmetodopago';
import { Reportes } from './components/reportes/reportes';
import { ReportesuserComponent } from './components/reportes/reportesuser/reportesuser';

import { ListarTipoCuentaComponent } from './components/tipocuenta/listar/listar';
import { InsertareditarTipoCuentaComponent } from './components/tipocuenta/insertareditar/insertareditar';

import { Home } from './components/home/home';
import { seguridadGuard } from './guard/seguridad.guard';
import { PerfilComponent } from './components/user/perfil/perfil';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  // --------- IVANA ---------
  {
    path: 'categorias',
    component: Categoria,
    children: [
      { path: 'insertarcategoria', component: InsertareditarCategoria },
      { path: 'ediciones/:id', component: InsertareditarCategoria }
    ]
  },
  {
    path: 'servicios',
    component: Servicio,
    children: [
      { path: 'insertarservicio', component: InsertareditarServicio },
      { path: 'ediciones/:id', component: InsertareditarServicio }
    ]
  },

  // --------- JOHN ---------
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
      { path: 'formularioR', component: InsertareditarRol }
    ]
  },
  {
    path: 'objetivoahorros',
    component: ObjetivoAhorro,
    children: [
      { path: 'formularioOA', component: InsertareditarObjetivoAhorro }
    ]
  },
  {
    path: 'reportes',
    component: Reportes,
    children: [
      { path: 'metodospagosgrafica', component: Reportesmetodopago },
      { path: 'graficUser', component: ReportesuserComponent }
    ]
  },

  // --------- JOAO ---------
  {
    path: 'transaccion',
    children: [
      { path: 'listar', component: ListarTransaccion },
      { path: 'insertar', component: InsertarEditarTransaccion },
      { path: 'editar/:id', component: InsertarEditarTransaccion }
    ]
  },
  {
    path: 'tipotransaccion',
    children: [
      { path: 'listar', component: ListarTipoTransaccionComponent },
      { path: 'insertar', component: InsertarEditarTipoTransaccionComponent },
      { path: 'editar/:id', component: InsertarEditarTipoTransaccionComponent }
    ]
  },
  {
    path: 'tipocuenta',
    children: [
      { path: 'listar', component: ListarTipoCuentaComponent },
      { path: 'insertar', component: InsertareditarTipoCuentaComponent },
      { path: 'editar/:id', component: InsertareditarTipoCuentaComponent }
    ]
  },
  {
    path: 'home',
    component: Home,
    canActivate: [seguridadGuard]
  },

  // ---------- PERFIL CLIENTE ----------
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [seguridadGuard]
  }
];
