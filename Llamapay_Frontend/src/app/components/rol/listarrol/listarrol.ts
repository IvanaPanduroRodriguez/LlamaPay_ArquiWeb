import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RolService } from '../../../services/rol.service';
import { Rol } from '../../../models/rol';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listarrol',
  imports: [
     MatTableModule,
    CommonModule,
    MatIconModule

  ],
  templateUrl: './listarrol.html',
  styleUrl: './listarrol.css'
})
export class Listarrol implements OnInit {
  dataSource: MatTableDataSource<Rol> = new MatTableDataSource()
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4']
  constructor(private rS: RolService) { }

  ngOnInit(): void {
    this.rS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
      this.rS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
  }
  eliminar(Rol_id: number) {
    this.rS.deleteS(Rol_id).subscribe(data=>{
      this.rS.list().subscribe(data=>{
        this.rS.setList(data)
      })
    })
    this.rS.getList().subscribe(data => { //actualiza la lista cuando se inserta o actualiza la data
      this.dataSource = new MatTableDataSource(data)
    })
  }
}