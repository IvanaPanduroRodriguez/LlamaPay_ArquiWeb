import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'
import { MetodoPagoService } from '../../../services/metodopago.service';
@Component({
  selector: 'app-reportesmetodopago',
  imports: [BaseChartDirective],
  templateUrl: './reportesmetodopago.html',
  styleUrl: './reportesmetodopago.css'
})
export class Reportesmetodopago implements OnInit{
  barChartOptions: ChartOptions = {
    responsive:true
  }

  barChartLabels: string[] = []
  barChartType: ChartType = 'bar'
  barcharLegend = true
  barChartData: ChartDataset[]=[]

  constructor(private mpS:MetodoPagoService){}
  ngOnInit(): void {
    this.mpS.getQuantitymetodspayforusers().subscribe(data=>{
      this.barChartLabels = data.map(item=> item.nombre)
      this.barChartData=[
        {
          data: data.map(item=>item.Id),
          label: 'Cantidad metodo pagos pór usuarios',
          backgroundColor:[
            '#CC0000',
            '#FF0000'
          ],
          borderColor:'#CC0000',
          borderWidth:1
        }
      ]
    })
  }

}

