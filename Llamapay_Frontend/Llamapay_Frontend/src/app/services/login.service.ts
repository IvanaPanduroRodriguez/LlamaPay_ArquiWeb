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

  verificar() {
    if (typeof window !== 'undefined' && sessionStorage) {
      let token = sessionStorage.getItem('token');
      return token != null;
    }
    return false;
  }
  showRole() {
    if (typeof window !== 'undefined' && sessionStorage) {
      let token = sessionStorage.getItem('token');
      if (!token) {
        return null; // O un valor por defecto, por ejemplo 'ESTUDIANTE'
      }
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      return decodedToken?.tipousuario || null;
    }
    return null;
  }
}