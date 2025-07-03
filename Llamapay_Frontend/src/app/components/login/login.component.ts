import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";
import { JwtRequest } from "../../models/jwtRequest";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  login(): void {
    const request: JwtRequest = {
      username: this.username,
      password: this.password
    };

    console.log('Enviando login:', request); // verifica lo enviado

    this.loginService.login(request).subscribe({
      next: (response) => {
        this.loginService.guardarSesion(response, this.username);
        this.router.navigate(['/home']);
      },
      error: (err) => {
      console.error('ERROR DETECTADO EN LOGIN:', err); // muy importante
      alert('Credenciales inválidas. Intente nuevamente.');
      }
    });
  }
}
