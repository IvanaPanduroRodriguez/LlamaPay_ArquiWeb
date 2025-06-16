import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Transaccion } from '../../../models/transaccion';
import { TipoTransaccion } from '../../../models/tipotransaccion';
import { TipoTransaccionService } from '../../../services/tipotransaccion.service';
import { TransaccionService } from '../../../services/transaccion.service';



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
  ],
  templateUrl: './insertareditar.html',
  styleUrls: ['./insertareditar.css']
})
export class InsertarEditarTransaccion implements OnInit {
  form: FormGroup;
  transaccion: Transaccion = new Transaccion();
  tiposTransaccion: TipoTransaccion[] = [];
  idTransaccion: number = 0;
  edicion: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private transaccionService: TransaccionService,
    private tipoTransaccionService: TipoTransaccionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

    this.activatedRoute.params.subscribe((params: Params) => {
      this.idTransaccion = params['id'];
      if (this.idTransaccion) {
        this.transaccionService.list().subscribe(data => {
          const t = data.find(x => x.idTransaccion === +this.idTransaccion);
          if (t) {
            this.transaccion = t;
            this.form.setValue({
              fechaTransaccion: new Date(t.fechaTransaccion),
              montoTransaccion: t.montoTransaccion,
              descripcionTransaccion: t.descripcionTransaccion,
              tipoTransaccion: t.tipotransaccion.tipoGastoId
            });
          }
        });
      }
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

      if (this.idTransaccion) {
        this.transaccion.idTransaccion = this.idTransaccion;
      }

      this.transaccionService.insert(this.transaccion).subscribe(() => {
        this.transaccionService.list().subscribe(data => {
          this.transaccionService.setList(data);
        });
        this.router.navigate(['/finanzas/listar']);
      });
    }
  }

  cancelar(): void {
    this.transaccionService.list().subscribe(data => {
      this.transaccionService.setList(data);
      this.router.navigate(['/finanzas/listar']);
    });
  }
}
