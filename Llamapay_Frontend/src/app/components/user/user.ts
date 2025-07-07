import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Listaruser } from './listaruser/listaruser';

@Component({
  selector: 'app-user',
  imports: [
    RouterOutlet
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  constructor(public route:ActivatedRoute) { 
  }
}