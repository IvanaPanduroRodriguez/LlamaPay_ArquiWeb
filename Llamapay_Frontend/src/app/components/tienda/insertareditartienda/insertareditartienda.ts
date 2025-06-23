import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Tienda } from '../../../models/tienda';
import { TiendaService } from '../../../services/tienda.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-insertareditartienda',
  imports: [    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './insertareditartienda.html',
  styleUrl: './insertareditartienda.css'
})
export class Insertareditartienda implements OnInit {
  form: FormGroup = new FormGroup({});
  tienda: Tienda = new Tienda();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private tS: TiendaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = this.id != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      idTienda: [''],
      nameTienda: ['', Validators.required],
      direccionTienda: ['', Validators.required],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.tienda.Tienda_id = this.form.value.idTienda;
      this.tienda.Nombre_tienda = this.form.value.nameTienda;
      this.tienda.Direccion = this.form.value.direccionTienda;

      if (this.edicion) {
        this.tS.update(this.tienda).subscribe(data => {
          this.tS.list().subscribe(data => {
            this.tS.setList(data);
          });
        });
      } else {
        this.tS.insert(this.tienda).subscribe(data => {
          this.tS.list().subscribe(data => {
            this.tS.setList(data);
          });
        });
      }
      this.router.navigate(['tiendas', 'listartienda']);
    }
  }

  init() {
    if (this.edicion) {
      this.tS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idTienda: new FormControl(data.Tienda_id),
          nameTienda: new FormControl(data.Nombre_tienda, Validators.required),
          direccionTienda: new FormControl(data.Direccion, Validators.required),
        });
      });
    }
  }

}
