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
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10']
  eventosCreados = false;
  eventos: any[] = [];
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

  agregarACalendario(objetivo: ObjetivoAhorro) {
    try {
      const fechaEvento = new Date(objetivo.fechaFin);
      const fechaFormateada = this.formatearfecha(fechaEvento);
      
      const titulo = `Meta de Ahorro: ${objetivo.nombreMeta}`;
      
      const descripcion = `Meta: ${objetivo.nombreMeta}%0A` +
        `Monto objetivo: S/ ${objetivo.montoMeta}%0A` +
        `Monto actual: S/ ${objetivo.montoActual}%0A` +
        `Estado: ${objetivo.estadoObjetivo}%0A` +
        `Fecha inicio: ${this.formatearfechaGoogle(objetivo.fechaInicio)}%0A` +
        `Fecha límite: ${this.formatearfechaGoogle(objetivo.fechaFin)}`;

      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(titulo)}` +
        `&dates=${fechaFormateada}/${fechaFormateada}` +
        `&details=${descripcion}` +
        `&ctz=America/Lima`;

      window.open(googleCalendarUrl, '_blank');
      
    } catch (error) {
      console.error('Error al crear evento de calendario:', error);
      alert('Error al crear el evento en Google Calendar. Intenta nuevamente.');
    }
  }

  private formatearfecha(fecha: Date): string {
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }

  private formatearfechaGoogle(fecha: Date): string {
    if (!fecha) return 'N/A';
    const fechaObj = new Date(fecha);
    const day = String(fechaObj.getDate()).padStart(2, '0');
    const month = String(fechaObj.getMonth() + 1).padStart(2, '0');
    const year = fechaObj.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
