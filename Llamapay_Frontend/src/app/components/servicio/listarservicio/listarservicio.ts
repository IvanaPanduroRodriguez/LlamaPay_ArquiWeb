import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Servicio } from '../../../models/servicio';
import { ServicioService } from '../../../services/servicio.service';


@Component({
  selector: 'app-listarservicio',
  imports: [
    MatTableModule
  ],
  templateUrl: './listarservicio.html',
  styleUrl: './listarservicio.css'
})
export class Listarservicio implements OnInit {
  dataSource: MatTableDataSource<Servicio> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3','c4'];

  constructor(private sS: ServicioService) {
  }

  ngOnInit(): void {
    this.sS.list().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })
    this.sS.getList().subscribe(data => { //actualiza la lista de servidores cuando se inserta o actualiza un servidor
      this.dataSource = new MatTableDataSource(data)
    })
  }

}
