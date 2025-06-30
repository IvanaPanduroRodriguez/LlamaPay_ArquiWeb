import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MetodoPago } from '../../../models/metodopago';
import { MetodoPagoService } from '../../../services/metodopago.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-listarmetodopago',
  imports: [MatTableModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './listarmetodopago.html',
  styleUrl: './listarmetodopago.css'
})
export class Listarmetodopago implements OnInit {
  dataSource: MatTableDataSource<MetodoPago> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5','c6','c7'];
  constructor(private mpS: MetodoPagoService) { }

ngOnInit(): void {
    this.mpS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
    this.mpS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })

  }
simularPago(element: MetodoPago) {
  alert(`Pago simulado exitosamente con el método: ${element.nombreMetodoPago}`);
}

agregarACalendario(element: MetodoPago) {
  const fecha = new Date().toISOString();
  const titulo = `Recordatorio - Pago con ${element.nombreMetodoPago}`;
  const link = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${titulo}
DTSTART:${fecha.replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${fecha.replace(/[-:]/g, '').split('.')[0]}Z
DESCRIPTION:${element.descripcion}
END:VEVENT
END:VCALENDAR`;

  const encodedUri = encodeURI(link);
  const a = document.createElement('a');
  a.href = encodedUri;
  a.download = `${titulo}.ics`;
  a.click();
}
  eliminar(id: number) {
    this.mpS.deleteS(id).subscribe(data=>{
      this.mpS.list().subscribe(data=>{
        this.mpS.setList(data)
      })
    })
    this.mpS.getList().subscribe(data => { //actualiza la lista de servidores cuando se inserta o actualiza un servidor
      this.dataSource = new MatTableDataSource(data)
    })
  }
}