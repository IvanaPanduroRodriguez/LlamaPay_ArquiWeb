import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import { Tienda } from '../../../models/tienda';
import { TiendaService } from '../../../services/tienda.service';

@Component({
  selector: 'app-listartienda',
  imports: [MatTableModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    RouterLink,],
  templateUrl: './listartienda.html',
  styleUrl: './listartienda.css'
})
export class Listartienda implements OnInit {
  dataSource: MatTableDataSource<Tienda> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];
  constructor(private tS: TiendaService) { }
  ngOnInit(): void {
    this.tS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.tS.getList().subscribe(data => { 
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.tS.deleteS(id).subscribe(data => {
      this.tS.list().subscribe(data => {
        this.tS.setList(data);
      });
    });
  }

}
