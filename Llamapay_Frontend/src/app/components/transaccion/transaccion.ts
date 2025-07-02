import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaccion',
  imports: [],
  templateUrl: './transaccion.html',
  styleUrls: ['./transaccion.css']
})
export class Transaccion {

  constructor(public route:ActivatedRoute) { 
  }

}
