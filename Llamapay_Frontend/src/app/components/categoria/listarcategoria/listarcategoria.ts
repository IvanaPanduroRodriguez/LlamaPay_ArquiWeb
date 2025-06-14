import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-listarcategoria',
  imports: [MatTableModule],
  templateUrl: './listarcategoria.html',
  styleUrl: './listarcategoria.css'
})
export class Listarcategoria implements OnInit {
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3'];
  constructor(private cS: CategoriaService) { }

  ngOnInit(): void {
    this.cS.list().subscribe(data => {
        this.dataSource = new MatTableDataSource(data)
    })
    this.cS.getList().subscribe(data => { //actualiza la lista de servidores cuando se inserta o actualiza un servidor
      this.dataSource = new MatTableDataSource(data)
    })
  }
}
