import { Component} from '@angular/core';
import {TiendaComponent} from './components/tienda/tienda';


@Component({
  selector: 'app-root',
  imports: [TiendaComponent],
  template: '<app-tienda></app-tienda>',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TiendaFR';
}
