import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarTipoCuentaComponent } from './listar/listar'; 
@Component({
  selector: 'app-tipocuenta',
  standalone: true,
  imports: [RouterOutlet, ListarTipoCuentaComponent],
  templateUrl: './tipocuenta.html',
  styleUrl: './tipocuenta.css'
})
export class Tipocuenta {
constructor(public route: ActivatedRoute) { }
}
