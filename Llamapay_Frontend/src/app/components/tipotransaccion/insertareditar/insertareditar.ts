import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TipoTransaccion } from '../../../models/tipotransaccion';
import { TipoTransaccionService } from '../../../services/tipotransaccion.service';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
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
  ],
  templateUrl: './insertareditar.html',
  styleUrls: ['./insertareditar.css']
})
export class InsertarTipoTransaccionComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  tipo: TipoTransaccion = new TipoTransaccion();
  idTipo: number = 0;
  edicion: boolean = false;

  constructor(
    private tipoService: TipoTransaccionService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion: ['', Validators.required]
    });

    this.route.params.subscribe((params: Params) => {
      this.idTipo = +params['id'];
      this.edicion = !!this.idTipo;

      if (this.edicion) {
        this.tipoService.listId(this.idTipo).subscribe((data: TipoTransaccion) => {
          this.tipo = data;
          this.form.patchValue({
            descripcion: data.descripcion
          });
        });
      }
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.tipo.descripcion = this.form.value['descripcion'];

      if (this.edicion) {
        this.tipo.tipoGastoId = this.idTipo;
        this.tipoService.update(this.tipo).subscribe(() => {
          this.actualizarYVolver();
        });
      } else {
        this.tipoService.insert(this.tipo).subscribe(() => {
          this.actualizarYVolver();
        });
      }
    }
  }

  cancelar(): void {
    this.router.navigate(['/tipotransaccion/listar']);
  }

  private actualizarYVolver(): void {
    this.tipoService.list().subscribe((data: TipoTransaccion[]) => {
      this.tipoService.setList(data);
      this.router.navigate(['/tipotransaccion/listar']);
    });
  }
}
