import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Transaccion } from '../../../models/transaccion';
import { TransaccionService } from '../../../services/transaccion.service';

@Component({
  selector: 'app-listar-transaccion',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    RouterLink,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './listar.html',
  styleUrls: ['./listar.css']
})
export class ListarTransaccion implements OnInit {
  dataSource: MatTableDataSource<Transaccion> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fecha', 'monto', 'detalle', 'editar', 'eliminar'];

  constructor(private tS: TransaccionService) {}

  ngOnInit(): void {
    this.tS.list().subscribe((data: Transaccion[]) => {
      this.tS.setList(data); // para que otros lo escuchen
      this.dataSource.data = data; // render inmediato
    });

    this.tS.getList().subscribe((data: Transaccion[]) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta transacción?')) {
      this.tS.delete(id).subscribe(() => {
        this.tS.list().subscribe((data: Transaccion[]) => {
          this.tS.setList(data); // sigue notificando
          this.dataSource.data = data; // tarea: actualización inmediata en vista actual
        });
      });
    }
  }

  verDetalle(element: Transaccion): void {
    alert(`ID: ${element.idTransaccion}
Fecha: ${new Date(element.fechaTransaccion).toLocaleDateString()}
Monto: S/. ${element.montoTransaccion}
Descripción: ${element.descripcionTransaccion}
Tipo: ${element.tipotransaccion.descripcion}`);
  }
}