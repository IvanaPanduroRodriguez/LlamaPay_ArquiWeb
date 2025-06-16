import { Component} from '@angular/core';
import {TiendaComponent} from './components/tienda/tienda';


@Component({
  selector: 'app-root',
  imports: [TiendaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TiendaFR';
}
