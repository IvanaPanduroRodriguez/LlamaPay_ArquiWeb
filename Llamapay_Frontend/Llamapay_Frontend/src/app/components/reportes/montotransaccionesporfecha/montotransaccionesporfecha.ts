import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TransaccionService } from '../../../services/transaccion.service';

@Component({
  selector: 'app-montotransaccionesporfecha',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './montotransaccionesporfecha.html',
  styleUrl: './montotransaccionesporfecha.css'
})
export class Montotransaccionesporfecha implements OnInit {
  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'line';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private transaccionService: TransaccionService) {}

  ngOnInit(): void {
    this.transaccionService.getMontoPorFecha().subscribe(data => {
      this.barChartLabels = data.map(item => item.fecha);
      this.barChartData = [{
        data: data.map(item => item.montoTotal),
        label: 'Monto Total por Fecha',
        backgroundColor: ['#90CAF9'],
        borderColor: '#1565C0',
        fill: true
      }];
    });
  }
}
