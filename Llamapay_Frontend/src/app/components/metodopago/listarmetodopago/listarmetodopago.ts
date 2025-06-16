import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MetodoPago } from '../../../models/metodopago';
import { MetodoPagoService } from '../../../services/metodopago.service';

@Component({
  selector: 'app-listarmetodopago',
  imports: [MatTableModule],
  templateUrl: './listarmetodopago.html',
  styleUrl: './listarmetodopago.css'
})
export class Listarmetodopago implements OnInit {
  dataSource: MatTableDataSource<MetodoPago> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4'];
  constructor(private mpS: MetodoPagoService) { }

  ngOnInit(): void {
    this.mpS.list().subscribe(data => {
        this.dataSource = new MatTableDataSource(data)
    })
    this.mpS.getList().subscribe(data => { //actualiza la lista de servidores cuando se inserta o actualiza un servidor
      this.dataSource = new MatTableDataSource(data)
    })
  }
}