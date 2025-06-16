import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MetodoPago } from '../../../models/metodopago';
import { MetodoPagoService } from '../../../services/metodopago.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-listarmetodopago',
  imports: [MatTableModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './listarmetodopago.html',
  styleUrl: './listarmetodopago.css'
})
export class Listarmetodopago implements OnInit {
  dataSource: MatTableDataSource<MetodoPago> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5','c6'];
  constructor(private mpS: MetodoPagoService) { }

ngOnInit(): void {
    this.mpS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
    this.mpS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })

  }

  eliminar(id: number) {
    this.mpS.deleteS(id).subscribe(data=>{
      this.mpS.list().subscribe(data=>{
        this.mpS.setList(data)
      })
    })
  }
}