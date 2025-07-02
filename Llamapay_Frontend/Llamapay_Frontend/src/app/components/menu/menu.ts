import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
