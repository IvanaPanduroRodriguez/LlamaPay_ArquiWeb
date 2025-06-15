import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TipoTransaccion } from '../../../../models/tipotransaccion';
import { TipoTransaccionService } from '../../../../services/tipotransaccion.service';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insertar-tipotransaccion',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './insertareditar.html',
  styleUrls: ['./insertareditar.css']
})
export class InsertarTipoTransaccionComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  tipo: TipoTransaccion = new TipoTransaccion();

  constructor(
    private tipoService: TipoTransaccionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion: ['', Validators.required]
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.tipo.descripcion = this.form.value['descripcion'];
      this.tipoService.insert(this.tipo).subscribe(() => {
        this.tipoService.list().subscribe(data => {
          this.tipoService.setList(data);
        });
        this.router.navigate(['/tipotransaccion/listar']);
      });
    }
  }
}
