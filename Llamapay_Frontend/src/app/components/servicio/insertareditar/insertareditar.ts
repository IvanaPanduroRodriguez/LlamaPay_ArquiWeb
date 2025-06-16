import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Servicio } from '../../../models/servicio';
import { ServicioService } from '../../../services/servicio.service';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-insertareditar',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './insertareditar.html',
  styleUrl: './insertareditar.css'
})
export class InsertareditarServicio implements OnInit{
  form: FormGroup = new FormGroup({});
  serv: Servicio = new Servicio();
  listcategorias: Categoria[] = []; // Lista de categorías
  // Inyectamos el servicio de categorías para obtener la lista de categorías

  constructor(
    private sS: ServicioService,
    private router: Router, 
    private formBuilder: FormBuilder,
    private cS: CategoriaService,
  ) {}

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        hnameCompany: ['', Validators.required], 
        hnameService: ['',Validators.required], 
        hidCategory: ['',Validators.required], 
    }) 
    this.cS.list().subscribe(data => {
      this.listcategorias = data; // Asignamos la lista de categorías al componente
    })
  }

  aceptar(): void{
    if(this.form.valid){
      this.serv.nameCompanyService = this.form.value.hnameCompany;
      this.serv.nameService = this.form.value.hameService;  
      this.serv.category.idCategory = this.form.value.hidCategory; 
      
      this.sS.insert(this.serv).subscribe((data=>{
        this.sS.list().subscribe((data =>{
          this.sS.setList(data); 
          this.router.navigate(['servicios']); // Actualizamos la lista de servicios
        }));
      }));
    }
  }
}
