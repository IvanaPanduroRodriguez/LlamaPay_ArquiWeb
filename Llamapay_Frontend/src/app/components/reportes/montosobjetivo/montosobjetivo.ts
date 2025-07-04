import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ProductosService } from '../../../services/productos.service';
import { MetaCestaPrdDTO } from '../../../models/metacestaprdto';
@Component({
  selector: 'app-montosobjetivo',
  imports: [BaseChartDirective],
  templateUrl: './montosobjetivo.html',
  styleUrl: './montosobjetivo.css'
})
export class Montosobjetivo implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Monto ($)'
        }
      }
    }
  }
  barChartLabels: string[] = []
  barChartType: ChartType = 'bar'
  barChartLegend = true
  barChartData: ChartDataset[] = []

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.metacesta().subscribe({
      next: (data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          this.barChartLabels = data.map(item => item.nombreusuario);
          this.barChartData = [
            {
              data: data.map(item => item.montoobjetivo),
              label: 'Monto Objetivo',
              backgroundColor: '#4CAF50',
              borderColor: '#2E7D32',
              borderWidth: 2
            },
            {
              data: data.map(item => item.montototal),
              label: 'Monto Cesta',
              backgroundColor: '#81C784',
              borderColor: '#388E3C',
              borderWidth: 2
            }
          ];
        } else {
          this.barChartLabels = ['Sin datos'];
          this.barChartData = [
            {
              data: [0],
              label: 'Sin datos disponibles',
              backgroundColor: ['#CCCCCC'],
              borderColor: '#999999',
              borderWidth: 1
            }
          ];
        }
      },
      error: (error) => {
        this.barChartLabels = ['Error'];
        this.barChartData = [
          {
            data: [0],
            label: 'Error al cargar datos',
            backgroundColor: ['#FF0000'],
            borderColor: '#CC0000',
            borderWidth: 1
          }
        ];
      }
    });
  }

}
