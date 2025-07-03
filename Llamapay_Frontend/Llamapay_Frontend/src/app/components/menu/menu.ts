import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    RouterLink,
    MatPaginatorModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  role: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.role = this.loginService.showRole(); // lo cargamos una vez
  }

  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    return this.loginService.verificar();
  }

  // Permisos por rol
  isAdmin(): boolean {
    return this.role === 'ADMIN';
  }

  isFinanzas(): boolean {
    return this.role === 'FINANZAS';
  }

  isTester(): boolean {
    return this.role === 'TESTER';
  }

  isCliente(): boolean {
    return this.role === 'CLIENTE';
  }

  // Para mostrar opciones compartidas
  puedeVerReportes(): boolean {
    return this.isAdmin() || this.isTester();
  }

  puedeVerTransacciones(): boolean {
    return this.isAdmin() || this.isFinanzas();
  }

  puedeVerObjetivos(): boolean {
    return this.isAdmin() || this.isCliente();
  }
}