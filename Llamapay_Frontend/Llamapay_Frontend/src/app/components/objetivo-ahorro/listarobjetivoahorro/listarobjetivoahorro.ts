import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ObjetivoAhorro } from '../../../models/objetivoahorro';
import { ObjetivoAhorroService } from '../../../services/objetivoahorro.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listarobjetivoahorro',
  imports: [
     MatTableModule,
    CommonModule,
    MatIconModule

  ],
  templateUrl: './listarobjetivoahorro.html',
  styleUrl: './listarobjetivoahorro.css'
})
export class Listarobjetivoahorro implements OnInit {
  dataSource: MatTableDataSource<ObjetivoAhorro> = new MatTableDataSource()
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9']
  constructor(private oS: ObjetivoAhorroService) { }

  ngOnInit(): void {
    this.oS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
      this.oS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
  }
  eliminar(id: number) {
    this.oS.deleteS(id).subscribe(data=>{
      this.oS.list().subscribe(data=>{
        this.oS.setList(data)
      })
    })
    this.oS.getList().subscribe(data => { //actualiza la lista cuando se inserta o actualiza la data
      this.dataSource = new MatTableDataSource(data)
    })
  }


}
