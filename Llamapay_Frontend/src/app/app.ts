import { Component } from '@angular/core';
import { Categoria } from './components/categoria/categoria';

import { MetodoPago } from './components/metodopago/metodopago';

import { User } from './components/user/user';
import { RouterOutlet } from '@angular/router';
import { ObjetivoAhorro } from "./components/objetivo-ahorro/objetivo-ahorro";
import { Rol } from "./components/rol/rol";


@Component({
  selector: 'app-root',

  imports: [RouterOutlet, Categoria, MetodoPago, User, ObjetivoAhorro, Rol],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Grupo1_Frontend';
}
