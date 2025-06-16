import {Component, OnInit} from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Producto} from '../../../models/producto';
import {ProductoService} from '../../../services/producto.service';

@Component({
  selector: 'app-insertareditar',
  imports: [MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    RouterLink],
  templateUrl: './insertareditar.html',
  styleUrl: './insertareditar.css'
})
export class Insertareditar implements OnInit{
  form:FormGroup = new FormGroup({});
  producto : Producto =new Producto();
  id: number = 0
  edicion: boolean = false
  constructor(private pS: ProductoService,
              private router:Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(data => {

      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init()
    })
    this.form=this.formBuilder.group({
      codigo: [''],
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required],
      precio: ['',Validators.required],
      medida: ['',Validators.required],
      tienda: ['',Validators.required],
      usuario: ['',Validators.required]
    })
  }
  aceptar() {
    if (this.form.valid) {
      this.producto.Nombre_producto = this.form.value.nombre;
      this.producto.Descripcion = this.form.value.descripcion;
      this.producto.Precio_Producto = this.form.value.precio;
      this.producto.Unidad_medida = this.form.value.medida;
      this.producto.Tienda_id = this.form.value.tienda;
      this.producto.User_id = this.form.value.usuario;

      if (this.edicion) {
        this.producto.Producto_id = this.id;
        this.pS.update(this.producto).subscribe(() => {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.producto).subscribe(() => {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['producto']);
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          codigo: new FormControl(data.Producto_id),
          nombre: new FormControl(data.Nombre_producto),
          descripcion: new FormControl(data.Descripcion),
          precio: new FormControl(data.Precio_Producto),
          medida: new FormControl(data.Unidad_medida),
          tienda: new FormControl(data.Tienda_id),
          usuario: new FormControl(data.User_id)
        });
      });
    }
  }
}
