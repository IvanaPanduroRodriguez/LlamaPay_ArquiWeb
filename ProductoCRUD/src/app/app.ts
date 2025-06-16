import { Component } from '@angular/core';
import {ProductoComponent} from './components/producto/producto';

@Component({
  selector: 'app-root',
  imports: [ProductoComponent],
  template: '<app-producto></app-producto>',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'productofr';
}
