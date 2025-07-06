import { Component, OnInit } from '@angular/core';
import { TipoCuenta } from '../../../models/tipocuenta';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TipoCuentaService } from '../../../services/tipocuenta.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listartipocuenta',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule, MatIconModule],
  templateUrl: './listar.html',
  styleUrl: './listar.css'
})
export class ListarTipoCuentaComponent implements OnInit {
  dataSource: MatTableDataSource<TipoCuenta> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'numero', 'tipo', 'saldo', 'moneda', 'usuario', 'editar', 'eliminar'];

  constructor(private tipoCuentaService: TipoCuentaService) {}

  ngOnInit(): void {
  this.tipoCuentaService.list().subscribe((data: TipoCuenta[]) => {
    this.dataSource.data = data;
  });

  this.tipoCuentaService.getList().subscribe((data: TipoCuenta[]) => {
    this.dataSource.data = data;
  });
}

  eliminar(id: number) {
    if (confirm('¿Deseas eliminar esta cuenta?')) {
      this.tipoCuentaService.delete(id).subscribe(() => {
        this.tipoCuentaService.list().subscribe(data => {
          this.tipoCuentaService.setList(data);
          this.dataSource.data = data;
        });
      });
    }
  }
}
