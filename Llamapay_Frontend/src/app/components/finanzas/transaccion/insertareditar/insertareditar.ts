import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { Transaccion } from '../../../../models/transaccion';
import { TransaccionService } from '../../../../services/transaccion.service';
import { TipoTransaccionService } from '../../../../services/tipotransaccion.service';
import { TipoTransaccion } from '../../../../models/tipotransaccion';

@Component({
  selector: 'app-insertareditar-transaccion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './insertareditar.html',
  styleUrls: ['./insertareditar.css']
})
export class InsertarEditarTransaccion implements OnInit {
  form: FormGroup;
  transaccion: Transaccion = new Transaccion();
  tiposTransaccion: TipoTransaccion[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private transaccionService: TransaccionService,
    private tipoTransaccionService: TipoTransaccionService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      fechaTransaccion: ['', Validators.required],
      montoTransaccion: ['', Validators.required],
      descripcionTransaccion: ['', Validators.required],
      tipoTransaccion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.tipoTransaccionService.list().subscribe(data => {
      this.tiposTransaccion = data;
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      const formValues = this.form.value;

      this.transaccion.fechaTransaccion = formValues.fechaTransaccion;
      this.transaccion.montoTransaccion = formValues.montoTransaccion;
      this.transaccion.descripcionTransaccion = formValues.descripcionTransaccion;
      this.transaccion.tipotransaccion = {
        tipoGastoId: formValues.tipoTransaccion,
        descripcion: ''
      };

      this.transaccionService.insert(this.transaccion).subscribe(() => {
        this.transaccionService.list().subscribe(data => {
          this.transaccionService.setList(data);
        });
        this.router.navigate(['/finanzas/listar']);
      });
    }
  }
}
