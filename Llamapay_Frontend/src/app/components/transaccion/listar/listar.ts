import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Transaccion } from '../../../models/transaccion';
import { TransaccionService } from '../../../services/transaccion.service';


@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule, MatTableModule,RouterLink],
  templateUrl: './listar.html',
  styleUrls: ['./listar.css']
})
export class ListarTransaccion implements OnInit {
  dataSource: MatTableDataSource<Transaccion> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];

  constructor(private tS: TransaccionService) {}

  ngOnInit(): void {
    this.tS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
