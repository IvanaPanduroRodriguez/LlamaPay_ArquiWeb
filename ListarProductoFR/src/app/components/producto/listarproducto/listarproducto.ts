import { Component,OnInit } from '@angular/core';
import {Producto} from '../../../models/producto';
import {ProductoService} from '../../../services/producto.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-listarproducto',
  imports: [MatTableModule],
  templateUrl: './listarproducto.html',
  styleUrl: './listarproducto.css'
})
export class Listarproducto implements OnInit{
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];
  constructor(private pS: ProductoService) { }
  ngOnInit() {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
