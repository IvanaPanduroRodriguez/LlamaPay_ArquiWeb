import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { TipoTransaccion } from '../../../models/tipotransaccion';
import { TipoTransaccionService } from '../../../services/tipotransaccion.service';

@Component({
  selector: 'app-listar-tipotransaccion',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './listar.html'
})
export class ListarTipoTransaccionComponent implements OnInit {
  lista: TipoTransaccion[] = [];
  displayedColumns: string[] = ['id', 'descripcion'];

  constructor(
    private tipoTransaccionService: TipoTransaccionService,
    private cdRef: ChangeDetectorRef  // Inyectamos ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.tipoTransaccionService.list().subscribe(data => {
      this.lista = data;
      this.cdRef.detectChanges(); // Esto elimina el error de ExpressionChanged
    });
  }
}
