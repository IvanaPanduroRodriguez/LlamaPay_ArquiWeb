import { Component,OnInit } from '@angular/core';
import {TiendaFr} from '../../../models/tienda';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {TiendaService} from '../../../services/tienda.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listartienda',
  imports: [MatTableModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatIconModule],
  templateUrl: './listartienda.html',
  styleUrl: './listartienda.css'
})
export class Listartienda implements OnInit {
  dataSource: MatTableDataSource<TiendaFr> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];
  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
    this.tiendaService.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.tiendaService.getList().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  eliminar(id: number) {
    this.tiendaService.deleteT(id).subscribe(onformdata=>{
      this.tiendaService.list().subscribe(data=>{
        this.tiendaService.setList(data)
      })
    })
  }
}
