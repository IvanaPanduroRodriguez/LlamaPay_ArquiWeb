import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtRequest } from '../models/jwtRequest';
import { JwtResponse } from '../models/jwtResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  login(request: JwtRequest) {
    return this.http.post<JwtResponse>('http://localhost:8085/login', request);
  }

  guardarSesion(response: JwtResponse, username: string): void {
    if (this.isBrowser()) {
      sessionStorage.setItem('token', response.jwttoken);
      sessionStorage.setItem('role', response.role);
      sessionStorage.setItem('username', username);
    }
  }

  verificar(): boolean {
    return this.isBrowser() && sessionStorage.getItem('token') !== null;
  }

  getUserRole(): string {
    return this.isBrowser() ? sessionStorage.getItem('role') || '' : '';
  }

  esAdmin(): boolean {
    return this.getUserRole() === 'ROLE_ADMIN';
  }

  esCliente(): boolean {
    return this.getUserRole() === 'ROLE_USER';
  }

  esTester(): boolean {
    return this.getUserRole() === 'ROLE_TESTER';
  }

  getUsername(): string | null {
    return this.isBrowser() ? sessionStorage.getItem('username') : null;
  }

  cerrarSesion(): void {
    if (this.isBrowser()) {
      sessionStorage.clear();
    }
  }

  getUserId(): number {
    return this.isBrowser() ? Number(sessionStorage.getItem('userId')) : 0;
  }
}
