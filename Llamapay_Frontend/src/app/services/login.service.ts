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

  login(request: JwtRequest) {
    return this.http.post<JwtResponse>('http://localhost:8085/login', request);
  }

  guardarSesion(response: JwtResponse, username: string): void {
    sessionStorage.setItem('token', response.jwttoken);
    sessionStorage.setItem('role', response.role);
    sessionStorage.setItem('username', username);
  }

  verificar(): boolean {
    const token = sessionStorage.getItem('token');
    return token != null && !this.helper.isTokenExpired(token);
  }

  getUserRole(): string {
    return sessionStorage.getItem('role') || '';
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
    return sessionStorage.getItem('username');
  }

  cerrarSesion(): void {
    sessionStorage.clear();
  }

  getUserId(): number {
    return Number(sessionStorage.getItem('userId'));
  }

}
