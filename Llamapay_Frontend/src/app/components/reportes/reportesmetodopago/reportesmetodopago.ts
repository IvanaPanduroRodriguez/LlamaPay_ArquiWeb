<<<<<<< HEAD
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'
import { MetodoPagoService } from '../../../services/metodopago.service';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reportesmetodopago',
  imports: [BaseChartDirective, FormsModule, CommonModule],
=======
@Component({
  selector: 'app-reportesmetodopago',
  imports: [BaseChartDirective, FormsModule],
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
  templateUrl: './reportesmetodopago.html',
  styleUrl: './reportesmetodopago.css'
})
export class Reportesmetodopago implements OnInit{
  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
<<<<<<< HEAD
  isBrowser: boolean = false;
=======
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98

  users: any[] = [];
  selectedUserId: number = 0;

  constructor(
    private mpS: MetodoPagoService,
<<<<<<< HEAD
    private userService: UserService, // <-- Inyecta correctamente
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.userService.list().subscribe(users => {
        this.users = users;
        if (this.users.length > 0) {
          this.selectedUserId = this.users[0].userId;
          this.loadChartData(this.selectedUserId);
        }
      });
    }
  }

  loadChartData(userId: number): void {
    if (this.isBrowser) {
      this.mpS.getQuantitymetodspayforusers(userId).subscribe(data => {
        this.barChartLabels = data.map(item => item.nombre);
        this.barChartData = [{
          data: data.map(item => item.id),
          label: 'Cantidad método pagos por usuarios',
          backgroundColor: ['#CC0000', '#FF0000'],
          borderColor: '#CC0000',
          borderWidth: 1
        }];
      });
    }
=======
    private userService: UserService // <-- Inyecta correctamente
  ) {}

  ngOnInit(): void {
    this.userService.list().subscribe(users => {
      this.users = users;
      if (this.users.length > 0) {
        this.selectedUserId = this.users[0].userId;
        this.loadChartData(this.selectedUserId);
      }
    });
  }

  loadChartData(userId: number): void {
    this.mpS.getQuantitymetodspayforusers(userId).subscribe(data => {
      this.barChartLabels = data.map(item => item.nombre);
      this.barChartData = [{
        data: data.map(item => item.id),
        label: 'Cantidad método pagos por usuarios',
        backgroundColor: ['#CC0000', '#FF0000'],
        borderColor: '#CC0000',
        borderWidth: 1
      }];
    });
>>>>>>> 7ec60d4f728858597ad20454dc865819f16e9d98
  }

  onUserChange(event: any): void {
    this.loadChartData(this.selectedUserId);
  }
}