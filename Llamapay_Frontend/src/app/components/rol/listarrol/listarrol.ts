import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RolService } from '../../../services/rol.service';
import { Rol } from '../../../models/rol';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listarrol',
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './listarrol.html',
  styleUrls: ['./listarrol.css']
})
export class Listarrol implements OnInit {
  dataSource: MatTableDataSource<Rol> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4'];

  constructor(private rS: RolService) {}

  ngOnInit(): void {
    this.rS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    this.rS.deleteS(id).subscribe(() => {
      this.rS.list().subscribe(data => {
        this.rS.setList(data);
        this.dataSource = new MatTableDataSource(data);
      });
    });
  }
  detalleSeleccionado: Rol | null = null;

verDetalle(rol: Rol) {
  this.detalleSeleccionado = rol;
}

cerrarDetalle() {
  this.detalleSeleccionado = null;
}

}
