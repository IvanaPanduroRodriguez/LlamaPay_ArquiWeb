import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../services/categoria.service';
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
export class InsertareditarCategoria implements OnInit{ //4
  form: FormGroup = new FormGroup({});//1 y del angular
  categoria: Categoria = new Categoria();//2 y tiene que ser del models

  constructor(private cS: CategoriaService,private router: Router,private formBuilder: FormBuilder){ //tiene que ser del angular material
  }
  ngOnInit(): void {
      this.form = this.formBuilder.group({ //creamos el cuerpo del post
        name: ['', Validators.required], //5
        type: ['', Validators.required], //6
    })
  }

  //metodo aceptar
  aceptar(){
    if(this.form.valid){
      this.categoria.nameCategory = this.form.value.name; 
      this.categoria.typeCategory = this.form.value.type; 

      this.cS.insert(this.categoria).subscribe(data => {
        this.cS.list().subscribe(data => { 
          this.cS.setList(data); 
          this.router.navigate(['categorias']);});
        });
    }
  }
}

