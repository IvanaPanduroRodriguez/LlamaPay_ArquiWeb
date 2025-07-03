import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

export const seguridadGuard = (
  route: ActivatedRoute,
  state: RouterStateSnapshot
) => {
  const lService = inject(LoginService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  const rpta = lService.verificar();
  if (!rpta) {
    router.navigate(['/login']);
    return false;
  }

  const role = lService.showRole();

  const rutasPorRol: { [key: string]: string[] } = {
    ADMIN: [''], // Acceso a todo
    FINANZAS: ['/metodopagos', '/transaccion', '/tipotransaccion'],
    TESTER: [
      '/reportes',
      '/tipocuenta',
      '/productos/buscarproducto',
      '/tiendas/buscartienda'
    ],
    CLIENTE: ['/objetivoahorros', '/home', '/succes', '/cancel']
  };

  // Si es ADMIN, permitir todo
  if (role === 'ADMIN') return true;

  const rutasPermitidas = rutasPorRol[role] || [];

  const tieneAcceso = rutasPermitidas.some((ruta) =>
    state.url.startsWith(ruta)
  );

  if (!tieneAcceso) {
    snackBar.open('No tienes permiso para acceder a esta ruta', 'Cerrar', {
      duration: 3000,
      panelClass: ['snackbar-error']
    });
    router.navigate(['/landing']);
    return false;
  }

  return true;
};
