import { Component,OnInit } from '@angular/core';
import {Producto} from '../../../models/producto';
import {ProductoService} from '../../../services/producto.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-listarproducto',
  imports: [    MatTableModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatIconModule],
  templateUrl: './listarproducto.html',
  styleUrl: './listarproducto.css'
})
export class Listarproducto implements OnInit{
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'];
  constructor(private pS: ProductoService) { }
  ngOnInit() {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

    })
    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  eliminar(id: number) {
    this.pS.deleteP(id).subscribe(onformdata => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      });
    });
  }
}
