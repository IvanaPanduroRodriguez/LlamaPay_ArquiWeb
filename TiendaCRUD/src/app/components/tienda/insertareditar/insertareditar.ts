import { Component,OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router';
import {TiendaService} from '../../../services/tienda.service';
import {TiendaFr} from '../../../models/tienda';

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
export class Insertareditar implements OnInit {
  form: FormGroup = new FormGroup({})
  tiendas: TiendaFr = new TiendaFr()
  mayoristas: {value: string, viewValue: string}[] = [
    { value: 'Wong', viewValue: 'Wong' },
    { value: 'Metro', viewValue: 'Metro' },
    { value: 'PlazaVea', viewValue: 'PlazaVea' }
    ]
  id: number = 0
  edicion: boolean = false

  constructor(private tiendaService: TiendaService ,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {

        this.id = data['id']
        this.edicion = data['id'] != null
        //actualizar
        this.init()
      }
    )
    this.form = this.formBuilder.group({
      codigo: [''],
      mayorista: ['', Validators.required],
      address: ['', Validators.required]
    })
  }
  aceptar() {
    if (this.form.valid) {
      this.tiendas.Tienda_id = this.form.value.codigo
      this.tiendas.Nombre_tienda = this.form.value.mayorista
      this.tiendas.Direccion = this.form.value.address

      if (this.edicion) {
        //actualizar
        this.tiendaService.update(this.tiendas).subscribe(data => {
          this.tiendaService.list().subscribe(data => {
            this.tiendaService.setList(data)
          })
        })
      } else {
        //INSERTAR
        this.tiendaService.insert(this.tiendas).subscribe(data => {
          this.tiendaService.list().subscribe(data => {
            this.tiendaService.setList(data)
          })
        })
      }
      this.router.navigate(['tienda'])
    }
  }
  init() {
    if (this.edicion) {
      this.tiendaService.listId(this.id).subscribe(data => {
        this.tiendas = data
        this.form = this.formBuilder.group({
          codigo: [this.tiendas.Tienda_id, Validators.required],
          mayorista: new FormControl(data.Nombre_tienda),
          address: [this.tiendas.Direccion, Validators.required]
        })
      })
    }
  }
}
