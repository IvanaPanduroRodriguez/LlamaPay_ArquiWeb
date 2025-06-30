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
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Producto } from '../../../models/productos';
import { ProductosService } from '../../../services/productos.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-insertareditarproducto',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule
  ],
  templateUrl: './insertareditarproducto.html',
  styleUrl: './insertareditarproducto.css'
})
export class Insertareditarproducto implements OnInit {
  form: FormGroup = new FormGroup({});
  producto: Producto = new Producto();
  id: number = 0;
  edicion: boolean = false;
  listatiendas: Tienda[] = [];
  listausuarios: User[] = [];
tiendaProducto: any;
  
  constructor(
    private pS:ProductosService,
    private tS: TiendaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private sS: UserService
    
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      idProducto: [''],
      nombreProducto: ['', Validators.required],
      descripcionProducto: ['', Validators.required],
      UnidadmedidaProducto: ['', Validators.required],
      precioProducto: ['', [Validators.required, Validators.min(0)]],
      usuarioProducto: ['', Validators.required],
      tiendaProducto: ['', Validators.required],
      
    });
    // Cargar listas de usuarios y tiendas
    this.sS.list().subscribe(data => {
      this.listausuarios = data;
    });
    this.tS.list().subscribe(data => {
      this.listatiendas = data;
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.producto.idproducto = this.form.value.idProducto;
      this.producto.nombreproducto = this.form.value.nombreProducto;
      this.producto.descripcion = this.form.value.descripcionProducto;
      this.producto.unidadmedida = this.form.value.UnidadmedidaProducto;
      this.producto.precioproducto = this.form.value.precioProducto;
      
      // Asegurar que los objetos están inicializados
      this.producto.us = new User();
      this.producto.us.userId = this.form.value.usuarioProducto;
      
      this.producto.td = new Tienda();
      this.producto.td.idtienda = this.form.value.tiendaProducto;
      
      console.log('Producto completo antes de enviar:', this.producto);
      console.log('Valores del formulario:', this.form.value);

      if (this.edicion) {
        this.pS.update(this.producto).subscribe(data => {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.producto).subscribe(data => {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['/productos']);
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idProducto: new FormControl(data.idproducto),
          nombreProducto: new FormControl(data.nombreproducto),
          descripcionProducto: new FormControl(data.descripcion),
          UnidadmedidaProducto: new FormControl(data.unidadmedida),
          precioProducto : new FormControl(data.precioproducto),
          usuarioProducto: new FormControl(data.us.userId),
          tiendaProducto: new FormControl(data.td.idtienda),
        });
      });
    }
  }


}
