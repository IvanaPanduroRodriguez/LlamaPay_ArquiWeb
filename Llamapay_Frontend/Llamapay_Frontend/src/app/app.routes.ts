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
import { InsertarTipoTransaccionComponent } from './components/tipotransaccion/insertareditar/insertareditar';
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
import { Tipocuenta } from './components/tipocuenta/tipocuenta';
import { ListarTipoCuentaComponent } from './components/tipocuenta/listar/listar';
import { InsertareditarTipoCuenta } from './components/tipocuenta/insertareditar/insertareditar';
import { Producto } from './components/producto/producto';
import { Insertareditarproducto } from './components/producto/insertareditarproducto/insertareditarproducto';
import { Buscarproducto } from './components/producto/buscarproducto/buscarproducto';
import { Buscartienda } from './components/tienda/buscartienda/buscartienda';
import { Insertareditartienda } from './components/tienda/insertareditartienda/insertareditartienda';
import { Tienda } from './components/tienda/tienda';
import { Success } from './components/success/success';
import { Cancel } from './components/cancel/cancel';
import { Home } from './components/home/home';
import { seguridadGuard } from './guard/seguridad.guard';
import { Perfil } from './components/user/perfil/perfil';


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
    path: 'categorias',
    component: Categoria,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['CLIENTE'] },
    children: [
      { path: 'insertarcategoria', component: InsertareditarCategoria },
      { path: 'ediciones/:id', component: InsertareditarCategoria }
    ]
  },

{
    path: 'servicios',
    component: Servicio,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['CLIENTE'] },
    children: [
      { path: 'insertarservicio', component: InsertareditarServicio },
      { path: 'ediciones/:id', component: InsertareditarServicio }
    ]
  },
 //-----------------JOHN------------------------------------------
  {
    path: 'metodopagos',
    component: MetodoPago,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['CLIENTE'] },
    children: [
      { path: 'formularioM', component: InsertareditarMetodoPago },
      { path: 'ediciones/:id', component: InsertareditarMetodoPago }
    ]
  },
  {
    path: 'users',
    component: User,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['ADMIN'] },
    children: [
      { path: 'formularioU', component: InsertareditarUser },
      { path: 'ediciones/:id', component: InsertareditarUser }
    ]
  },
  {
    path: 'roles',
    component: Rol,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['ADMIN'] },
    children: [
      { path: 'formularioR', component: InsertareditarRol }
    ]
  },
   {
    path: 'objetivoahorros',
    component: ObjetivoAhorro,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['CLIENTE'] },
    children: [
      { path: 'formularioOA', component: InsertareditarObjetivoAhorro }
    ]
  },
{
    path: 'reportes',
    component: Reportes,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['ADMIN', 'CLIENTE', 'TESTER'] },
    children: [
      { path: 'metodospagosgrafica', component: Reportesmetodopago },
      { path: 'graficUser', component: ReportesuserComponent, data: { roles: ['ADMIN', 'TESTER'] } }
    ]
  },
//-----------------JOAO------------------------------------------
{
    path: 'transaccion',
    component: Transaccion,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['CLIENTE'] },
    children: [
      { path: 'listar', component: ListarTransaccion },
      { path: 'insertar', component: InsertarEditarTransaccion },
      { path: 'editar/:id', component: InsertarEditarTransaccion }
    ]
  },
 {
    path: 'tipotransaccion',
    component: TipoTransaccion,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['CLIENTE'] },
    children: [
      { path: 'listar', component: ListarTipoTransaccionComponent },
      { path: 'insertar', component: InsertarTipoTransaccionComponent },
      { path: 'editar/:id', component: InsertarTipoTransaccionComponent }
    ]
  },
  {
    path: 'tipocuenta',
    component: Tipocuenta,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['CLIENTE'] },
    children: [
      { path: 'listar', component: ListarTipoCuentaComponent },
      { path: 'insertar', component: InsertareditarTipoCuenta },
      { path: 'editar/:id', component: InsertareditarTipoCuenta }
    ]
  },
  {
   path: 'succes', component: Success 
  },
  {
    path: 'cancel', component: Cancel
  },
 // -----------------------------------------CARLOS-------------------------------
  {
    path: 'productos',
    component: Producto,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['CLIENTE'] },
    children: [
      { path: 'formularioP', component: Insertareditarproducto },
      { path: 'editar/:id', component: Insertareditarproducto },
      { path: 'buscarproducto', component: Buscarproducto }
    ]
  },
  {
    path: 'tiendas',
    component: Tienda,
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    data: { roles: ['CLIENTE'] },
    children: [
      { path: 'formularioT', component: Insertareditartienda },
      { path: 'editar/:id', component: Insertareditartienda },
      { path: 'buscartienda', component: Buscartienda }
    ]
  },
  {
    path: 'home',
    component: Home,
  canActivate: [seguridadGuard]
  },
    {
    path: 'perfil',
    component: Perfil,
    canActivate: [seguridadGuard]
  }
];
