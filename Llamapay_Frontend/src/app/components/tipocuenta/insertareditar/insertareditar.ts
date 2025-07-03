import { Component, OnInit } from '@angular/core';
import { TipoCuenta } from '../../../models/tipocuenta';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoCuentaService } from '../../../services/tipocuenta.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-insertareditar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './insertareditar.html',
  styleUrl: './insertareditar.css'
})
export class Insertareditar implements OnInit {
  form: FormGroup;
  edicion: boolean = false;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private tipoCuentaService: TipoCuentaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      idTipoCuenta: [0],
      nombreTipoCuenta: ['', Validators.required],
      numeroTipoCuenta: ['',
    [
      Validators.required,
      Validators.pattern(/^\d{8,20}$/) // solo números, entre 8 y 20 dígitos
    ]
  ],
      tipodeCuenta: ['', Validators.required],
      saldoTipoCuenta: [0,
    [
      Validators.required,
      Validators.min(0),
      Validators.max(1000000)
    ]
  ],
      monedaTipoCuenta: ['', Validators.required],
      user: this.fb.group({
        userId: [1, Validators.required] // puedes reemplazar el 1 por un valor dinámico más adelante
      })
    });
  }

  get userIdControl() {
    return this.form.get('user.userId') as FormControl;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edicion = !!this.id;

      if (this.edicion) {
        this.tipoCuentaService.list().subscribe((data: TipoCuenta[]) => {
          const tipoCuenta = data.find(t => t.idTipoCuenta === +this.id);
          if (tipoCuenta) {
            this.form.patchValue({
              idTipoCuenta: tipoCuenta.idTipoCuenta,
              nombreTipoCuenta: tipoCuenta.nombreTipoCuenta,
              numeroTipoCuenta: tipoCuenta.numeroTipoCuenta,
              tipodeCuenta: tipoCuenta.tipodeCuenta,
              saldoTipoCuenta: tipoCuenta.saldoTipoCuenta,
              monedaTipoCuenta: tipoCuenta.monedaTipoCuenta,
              user: {
                userId: tipoCuenta.user.userId
              }
            });
          }
        });
      }
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      const tipoCuenta: TipoCuenta = this.form.value;

      if (this.edicion) {
        this.tipoCuentaService.update(tipoCuenta).subscribe(() => {
          this.tipoCuentaService.list().subscribe((data: TipoCuenta[]) => {
            this.tipoCuentaService.setList(data);
            this.router.navigate(['/tipocuenta/listar']);
          });
        });
      } else {
        this.tipoCuentaService.insert(tipoCuenta).subscribe(() => {
          this.tipoCuentaService.list().subscribe((data: TipoCuenta[]) => {
            this.tipoCuentaService.setList(data);
            this.router.navigate(['/tipocuenta/listar']);
          });
        });
      }
    }
  }

  cancelar(): void {
    this.router.navigate(['/tipocuenta/listar']);
  }
}
