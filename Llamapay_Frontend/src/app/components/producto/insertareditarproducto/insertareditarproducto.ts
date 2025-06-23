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


@Component({
  selector: 'app-insertareditarproducto',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule],
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
  
  constructor(
    private pS:ProductosService,
    private tS: TiendaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private sS: UserService
    
  ) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idProducto: [''],
      nombreProducto: ['', Validators.required],
      descripcionProducto: ['', Validators.required],
      UnidadmedidaProducto: ['', Validators.required],
      precioProducto: ['', [Validators.required, Validators.min(0)]],
      usuarioProducto: ['', Validators.required],
      tiendaProducto: ['', Validators.required],
    });
    this.sS.list().subscribe(data=>{
      this.listausuarios=data
    })
    this.tS.list().subscribe(data => {
      this.listatiendas = data;
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.producto.Producto_id = this.form.value.idProducto;
      this.producto.Nombre_producto = this.form.value.nombreProducto;
      this.producto.Descripcion = this.form.value.descripcionProducto;
      this.producto.Unidad_medida = this.form.value.UnidadmedidaProducto;
      this.producto.Precio_Producto = this.form.value.precioProducto;
      this.producto.us.username = this.form.value.usuarioProducto;
      this.producto.td.Nombre_tienda = this.form.value.tiendaProducto;

      if (this.edicion) {
        this.pS.update(this.producto).subscribe(data => {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.update(this.producto).subscribe(data => {
          this.router.navigate(['/producto/listarproducto']);
        });
      }
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idProducto: new FormControl(data.Producto_id),
          nombreProducto: new FormControl(data.Nombre_producto),
          descripcionProducto: new FormControl(data.Descripcion),
          UnidadmedidaProducto: new FormControl(data.Unidad_medida),
          precioProducto : new FormControl(data.Precio_Producto),
          usuarioProducto: new FormControl(data.us.username),
          tiendaProducto: new FormControl(data.td.Nombre_tienda),
        });
      });
    }
  }


}
