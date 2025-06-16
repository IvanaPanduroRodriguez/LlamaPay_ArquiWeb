import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RouterLink, Router } from '@angular/router';
import { Transaccion } from '../../../../models/transaccion';
import { TransaccionService } from '../../../../services/transaccion.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-listar-transaccion',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    RouterLink,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './listar.html',
  styleUrls: ['./listar.css']
})
export class ListarTransaccion implements OnInit {
  dataSource: MatTableDataSource<Transaccion> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fecha', 'monto', 'detalle', 'editar', 'eliminar'];

  constructor(private tS: TransaccionService, private router: Router) {}

  ngOnInit(): void {
    this.tS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.tS.delete(id).subscribe(() => {
      this.tS.list().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.tS.setList(data);
      });
    });
  }

  verDetalle(transaccion: Transaccion) {
    alert(
      `Detalle de Transacción:\n` +
      `ID: ${transaccion.idTransaccion}\n` +
      `Fecha: ${new Date(transaccion.fechaTransaccion).toLocaleDateString()}\n` +
      `Monto: S/. ${transaccion.montoTransaccion}\n` +
      `Descripción: ${transaccion.descripcionTransaccion}\n` +
      `Tipo de transacción: ${transaccion.tipotransaccion?.descripcion || 'No definido'}`
    );
  }
}
