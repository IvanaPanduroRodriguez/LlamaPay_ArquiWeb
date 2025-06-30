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
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9','c10']
  constructor(private oS: ObjetivoAhorroService) { }

  ngOnInit(): void {
    this.oS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
      this.oS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

  agregarACalendario(meta: ObjetivoAhorro) {
  const fechaFinISO = new Date(meta.fechaFin).toISOString();
  const titulo = `Meta de Ahorro: ${meta.nombreMeta}`;
  const descripcion = `Objetivo de ahorro hasta ${meta.fechaFin} por un monto de S/. ${meta.montoMeta}`;

  const eventoICS = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${titulo}
DESCRIPTION:${descripcion}
DTSTART:${fechaFinISO.replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${fechaFinISO.replace(/[-:]/g, '').split('.')[0]}Z
END:VEVENT
END:VCALENDAR`;

  const encodedUri = encodeURI("data:text/calendar;charset=utf8," + eventoICS);
  const a = document.createElement('a');
  a.href = encodedUri;
  a.download = `${titulo}.ics`;
  a.click();
}

  eliminar(Objetivo_id: number) {
    this.oS.deleteS(Objetivo_id).subscribe(data=>{
      this.oS.list().subscribe(data=>{
        this.oS.setList(data)
      })
    })
    this.oS.getList().subscribe(data => { //actualiza la lista cuando se inserta o actualiza la data
      this.dataSource = new MatTableDataSource(data)
    })
  }
}
