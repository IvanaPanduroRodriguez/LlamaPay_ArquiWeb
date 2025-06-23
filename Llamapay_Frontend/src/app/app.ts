import { Component } from '@angular/core';
import { Categoria } from './components/categoria/categoria';
import { MetodoPago } from "./components/metodopago/metodopago";
import { User } from './components/user/user';
import { RouterOutlet } from '@angular/router';
import { Tienda } from "./components/tienda/tienda";
import { Menu } from "./components/menu/menu";



@Component({
  selector: 'app-root',
  imports: [Categoria
    //MetodoPago, 
    //User,
    //RouterOutlet
    ,
    Tienda, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Grupo1_Frontend';
}
