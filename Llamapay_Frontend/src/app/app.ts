import { Component } from '@angular/core';
import { Categoria } from './components/categoria/categoria';
import { MetodoPago } from "./components/metodopago/metodopago";
import { User } from './components/user/user';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [Categoria 
    //MetodoPago, 
    //User,
    //RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Grupo1_Frontend';
}
