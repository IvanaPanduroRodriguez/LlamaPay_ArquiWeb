import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../services/categoria.service';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listarcategoria',
  imports: [
    MatTableModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './listarcategoria.html',
  styleUrl: './listarcategoria.css'
})
export class Listarcategoria implements OnInit {
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3','c4','c5'];
  constructor(private cS: CategoriaService) { }

  ngOnInit(): void {
    this.cS.list().subscribe(data => {
        this.dataSource = new MatTableDataSource(data)
    })
    this.cS.getList().subscribe(data => { //actualiza la lista de servidores cuando se inserta o actualiza un servidor
      this.dataSource = new MatTableDataSource(data)
    })
  }

  eliminar(id: number) {
    this.cS.deleteS(id).subscribe(data=>{
      this.cS.list().subscribe(data=>{
        this.cS.setList(data)
      })
    })
  }
}
