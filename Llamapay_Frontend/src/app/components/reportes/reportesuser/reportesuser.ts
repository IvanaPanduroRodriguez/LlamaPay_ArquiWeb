import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ChartOptions, ChartType, ChartDataset  } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reportesuser',
  imports: [BaseChartDirective],
  templateUrl: './reportesuser.html',
  styleUrl: './reportesuser.css'
})
export class ReportesuserComponent implements OnInit {
  barChartData: ChartDataset[] = [];
  barChartLabels: string[] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLegend = true;
  barChartType: ChartType = 'bar';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const inicio = '2000-01-01';
    const fin = '2026-01-01';

    this.userService.getBirthdaysByRange(inicio, fin).subscribe(data => {
      const meses = new Array(12).fill(0);
      data.forEach(user => {
        const mes = new Date(user.diaNacimiento).getMonth();
        meses[mes]++;
      });

      this.barChartLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                             'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

      this.barChartData = [
        { data: meses, label: 'Cantidad de usuarios' }
      ];
    });
  }
}