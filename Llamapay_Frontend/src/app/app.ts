import { Component } from '@angular/core';
import { Categoria } from './components/categoria/categoria';

@Component({
  selector: 'app-root',
  imports: [Categoria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Grupo1_Frontend';
}
