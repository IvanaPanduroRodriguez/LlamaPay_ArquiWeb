import { Component,OnInit } from '@angular/core';
import {TiendaFr} from '../../../models/tienda';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {TiendaService} from '../../../services/tienda.service';

@Component({
  selector: 'app-listartienda',
  imports: [MatTableModule],
  templateUrl: './listartienda.html',
  styleUrl: './listartienda.css'
})
export class Listartienda implements OnInit {
  dataSource: MatTableDataSource<TiendaFr> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3'];
  constructor(private tiendaService: TiendaService) { }
  ngOnInit() {
    this.tiendaService.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
