import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {Listartienda} from './listartienda/listartienda';

@Component({
  selector: 'app-tienda',
  imports: [RouterOutlet,Listartienda],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css'
})
export class TiendaComponent {
  constructor(public route: ActivatedRoute) { }
}
