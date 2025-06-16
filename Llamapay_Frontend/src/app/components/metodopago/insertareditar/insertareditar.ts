import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MetodoPago } from '../../../models/metodopago';
import { MetodoPagoService } from '../../../services/metodopago.service';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-insertareditar',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './insertareditar.html',
  styleUrl: './insertareditar.css'
})
export class InsertareditarMetodoPago implements OnInit{ //4
  form: FormGroup = new FormGroup({});//1 y del angular
  metodopago: MetodoPago = new MetodoPago();//2 y tiene que ser del models

  constructor(private mpS: MetodoPagoService,private router: Router,private formBuilder: FormBuilder){ //tiene que ser del angular material
  }
  ngOnInit(): void {
      this.form = this.formBuilder.group({ //creamos el cuerpo del post
        name: ['', Validators.required], //5
        type: ['', Validators.required],
        description:['', Validators.required], //6
    })
  }

  //metodo aceptar
  aceptar(){
    if(this.form.valid){
      this.metodopago.nombreMetodoPago = this.form.value.name; 
      this.metodopago.tipoMetodoPago = this.form.value.type;
      this.metodopago.descripcion = this.form.value.description; 

      this.mpS.insert(this.metodopago).subscribe(data => {
        this.mpS.list().subscribe(data => { 
          this.mpS.setList(data); 
        });
        this.router.navigate(['/metodospagos']); //9
      }
      )
    }
  }
}

