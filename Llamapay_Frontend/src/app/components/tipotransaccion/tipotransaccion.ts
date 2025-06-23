import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tipo-transaccion',
  standalone: true,
  imports: [],
  templateUrl: './tipotransaccion.html',
  styleUrls: ['./tipotransaccion.css']
})
export class TipoTransaccion {
  constructor(public route:ActivatedRoute) { 
  }
}
