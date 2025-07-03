import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { ChartOptions, ChartType, ChartDataset  } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reportesuser',
  imports: [BaseChartDirective, CommonModule],
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
  isBrowser: boolean = false;

  constructor(
    private userService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const inicio = '2025-01-01';
      const fin = '2025-12-31';

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
}