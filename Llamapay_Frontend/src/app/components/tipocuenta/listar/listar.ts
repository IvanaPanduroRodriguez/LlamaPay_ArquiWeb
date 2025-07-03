import { Component, OnInit } from '@angular/core';
import { TipoCuenta } from '../../../models/tipocuenta';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TipoCuentaService } from '../../../services/tipocuenta.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
<<<<<<< HEAD
  selector: 'app-listar',
=======
  selector: 'app-listar-tipocuenta',
  standalone: true,
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule, MatIconModule],
  templateUrl: './listar.html',
  styleUrl: './listar.css'
})
<<<<<<< HEAD
export class Listar implements OnInit {
=======
export class ListarTipoCuentaComponent implements OnInit {
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
