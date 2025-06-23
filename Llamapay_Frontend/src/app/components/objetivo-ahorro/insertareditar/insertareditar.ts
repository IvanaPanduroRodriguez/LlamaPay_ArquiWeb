import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ObjetivoAhorro } from '../../../models/objetivoahorro';
import { ObjetivoAhorroService } from '../../../services/objetivoahorro.service';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-insertareditar',
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './insertareditar.html',
  styleUrl: './insertareditar.css'
})
export class InsertareditarObjetivoAhorro implements OnInit {
  form: FormGroup = new FormGroup({})

  ObjtivoAhorro: ObjetivoAhorro = new ObjetivoAhorro()

  estadoObjetivo:{value:string;viewValue:string}[]=[
    {value:'En espera de Aceptación',viewValue:'En espera de Aceptación'},
    {value:'En progreso',viewValue:'En progreso'},
    {value:'Dado de Baja',viewValue:'Dado de Baja'}
  ]

  listaUsuarios:User[]=[]

  constructor(
    private formBuilder: FormBuilder,
    private oS: ObjetivoAhorroService,
    private router: Router,
    private uS:UserService
  ) { }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      meta: ['', Validators.required],
      montoMeta: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      montoActual: ['', Validators.required],
      estadoObjetivo: ['', Validators.required],
      user: ['', Validators.required]
    })
    this.uS.list().subscribe(data=>{
      this.listaUsuarios=data
    })
  }
  aceptar() {
    if (this.form.valid) {
      this.ObjtivoAhorro.nombreMeta = this.form.value.meta
      this.ObjtivoAhorro.montoMeta = this.form.value.montoMeta
      this.ObjtivoAhorro.fechaInicio = this.form.value.fechaInicial
      this.ObjtivoAhorro.fechaFin = this.form.value.fechaFinal
      this.ObjtivoAhorro.montoActual = this.form.value.montoActual
      this.ObjtivoAhorro.estadoObjetivo = this.form.value.estadoObjetivo
      this.ObjtivoAhorro.user.userId = this.form.value.user
      this.oS.insert(this.ObjtivoAhorro).subscribe(() => {
        this.oS.list().subscribe(data => {
          this.oS.setList(data)
        })
      })
      this.router.navigate(['objetivoahorros'])
    }
  }
}