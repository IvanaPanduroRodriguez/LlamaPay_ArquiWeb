import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {
  esNavegador: boolean = typeof window !== 'undefined';

  constructor(public loginService: LoginService) {}

  mostrarRegistro(): boolean {
    return this.esNavegador && !this.loginService.verificar();
  }
}
