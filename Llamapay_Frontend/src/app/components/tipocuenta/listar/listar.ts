import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TipoCuenta } from '../../../models/tipocuenta';
import { TipoCuentaService } from '../../../services/tipocuenta.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-tipocuenta',
  templateUrl: './listar.html',
  styleUrls: ['./listar.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class ListarTipoCuentaComponent implements OnInit {
  lista: TipoCuenta[] = [];

  private tipoCuentaService = inject(TipoCuentaService);
  private router = inject(Router);

  ngOnInit(): void {
    this.tipoCuentaService.getList().subscribe((data: TipoCuenta[]) => {
      this.lista = data;
    });
  }

  editar(id: number) {
    this.router.navigate(['/tipocuenta/insertar', id]);
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar este tipo de cuenta?')) {
      this.tipoCuentaService.delete(id).subscribe(() => {
        this.tipoCuentaService.list().subscribe((data: TipoCuenta[]) => {
          this.tipoCuentaService.setList(data);
        });
      });
    }
  }

  verDetalle(tipoCuenta: TipoCuenta) {
    alert(`Detalle:\nNombre: ${tipoCuenta.nombreTipoCuenta}\nNúmero: ${tipoCuenta.numeroTipoCuenta}\nTipo: ${tipoCuenta.tipodeCuenta}`);
  }
}
