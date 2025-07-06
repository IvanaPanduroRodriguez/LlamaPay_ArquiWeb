import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { TipoCuenta } from '../../../models/tipocuenta';
import { TipoCuentaService } from '../../../services/tipocuenta.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    RouterModule
  ]
})
export class ListarTipoCuentaComponent implements OnInit {
  lista: TipoCuenta[] = [];

  constructor(
    private tipoCuentaService: TipoCuentaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tipoCuentaService.getList().subscribe(data => {
      this.lista = data;
    });

    this.actualizarLista(); // fuerza la recarga al iniciar
  }

  actualizarLista(): void {
    this.tipoCuentaService.list().subscribe(data => {
      this.tipoCuentaService.setList(data);
    });
  }

  editar(id: number) {
    this.router.navigate(['/tipocuenta/insertar', id]);
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar este tipo de cuenta?')) {
      this.tipoCuentaService.delete(id).subscribe(() => {
        this.tipoCuentaService.list().subscribe(data => {
          this.tipoCuentaService.setList(data);
        });
      });
    }
  }

  verDetalle(tipoCuenta: TipoCuenta) {
    alert(`Detalle:\nNombre: ${tipoCuenta.nombreTipoCuenta}\nNúmero: ${tipoCuenta.numeroTipoCuenta}\nTipo: ${tipoCuenta.tipodeCuenta}`);
  }
}
