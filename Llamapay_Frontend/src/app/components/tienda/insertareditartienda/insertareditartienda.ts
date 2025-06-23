import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Tienda } from '../../../models/tienda';
import { TiendaService } from '../../../services/tienda.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-insertareditartienda',
  imports: [    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './insertareditartienda.html',
  styleUrl: './insertareditartienda.css'
})
export class Insertareditartienda implements OnInit {
  form: FormGroup = new FormGroup({});
  tienda: Tienda = new Tienda();

  constructor(private tS: TiendaService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameTienda: ['', Validators.required],
      direccionTienda: ['', Validators.required],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.tienda.Nombre_tienda = this.form.value.nameTienda;
      this.tienda.Direccion = this.form.value.direccionTienda;

      this.tS.insert(this.tienda).subscribe(data => {
        this.tS.list().subscribe(data => {
          this.tS.setList(data);
          this.router.navigate(['tiendas']);
        });
      });
    }
  }

}
