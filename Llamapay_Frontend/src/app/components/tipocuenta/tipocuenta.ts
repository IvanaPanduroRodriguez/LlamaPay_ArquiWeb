import { Component } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Listar} from './listar/listar'; 
@Component({
  selector: 'app-tipocuenta',
  standalone: true,
  imports: [RouterOutlet, Listar],
  templateUrl: './tipocuenta.html',
  styleUrl: './tipocuenta.css'
})
export class Tipocuenta {
constructor(public route: ActivatedRoute) { }
}
=======
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tipocuenta',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class TipoCuenta {}
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
