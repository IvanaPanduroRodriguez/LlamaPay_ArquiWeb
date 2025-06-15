import { Routes } from '@angular/router';

import { Transaccion } from './components/finanzas/transaccion/transaccion';
import { ListarTransaccion } from './components/finanzas/transaccion/listar/listar';
import { InsertarEditarTransaccion } from './components/finanzas/transaccion/insertareditar/insertareditar';

import { TipoTransaccion } from './components/finanzas/tipotransaccion/tipotransaccion';
import { ListarTipoTransaccionComponent } from './components/finanzas/tipotransaccion/listar/listar';
import { InsertarTipoTransaccionComponent } from './components/finanzas/tipotransaccion/insertareditar/insertareditar';

export const routes: Routes = [
  {
    path: 'finanzas',
    component: Transaccion,
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
