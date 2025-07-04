import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ProductosService } from '../../../services/productos.service';
@Component({
  selector: 'app-productosandpriceandunit',
  imports: [BaseChartDirective],
  templateUrl: './productosandpriceandunit.html',
  styleUrl: './productosandpriceandunit.css'
})
export class Productosandpriceandunit implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true
  }
  barChartLabels: string[] = []
  barChartType: ChartType = 'pie'
  barChartLegend = true
  barChartData: ChartDataset[] = []

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.productosandpriceandunit().subscribe(data => {
      this.barChartLabels = data.map(item => item.nombreProducto)
      this.barChartData = [
        {
          data: data.map(item => item.totalunidades),
          label:'Cantidad productos',
          backgroundColor:[
            '#2E7D32',
            '#388E3C',
            '#43A047',
            '#4CAF50',
            '#66BB6A',
            '#81C784',
            '#A5D6A7',
            '#C8E6C9'
          ],
          borderColor:'#1B5E20',
          borderWidth:2

        }
      ]
    })
  }


}
