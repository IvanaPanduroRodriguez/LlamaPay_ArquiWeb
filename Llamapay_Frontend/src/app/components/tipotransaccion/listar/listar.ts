import { Component, OnInit } from '@angular/core';
import { TipoTransaccionService } from '../../../services/tipotransaccion.service';
import { TipoTransaccion } from '../../../models/tipotransaccion';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-tipotransaccion',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './listar.html',
  styleUrls: ['./listar.css']
})
export class ListarTipoTransaccionComponent implements OnInit {
  dataSource: MatTableDataSource<TipoTransaccion> = new MatTableDataSource();

  constructor(private tipoService: TipoTransaccionService) {}

  ngOnInit(): void {
    this.tipoService.list().subscribe((data: TipoTransaccion[]) => {
      this.tipoService.setList(data);
      this.dataSource.data = data;
    });

    this.tipoService.getList().subscribe((data: TipoTransaccion[]) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Eliminar este tipo de transacción?')) {
      this.tipoService.delete(id).subscribe(() => {
        this.tipoService.list().subscribe((data: TipoTransaccion[]) => {
          this.tipoService.setList(data);
          this.dataSource.data = data;
        });
      });
    }
  }
}
