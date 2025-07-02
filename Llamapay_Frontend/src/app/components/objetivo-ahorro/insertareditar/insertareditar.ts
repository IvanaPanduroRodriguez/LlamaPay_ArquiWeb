import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ObjetivoAhorro } from '../../../models/objetivoahorro';
import { ObjetivoAhorroService } from '../../../services/objetivoahorro.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  id:number=0;
  actualizar: boolean = false;

estadoObjetivos: { value: string; viewValue: string; isActivo: boolean }[] = [
  { value: 'En espera de Aceptación', viewValue: 'En espera de Aceptación', isActivo: true },
  { value: 'En progreso', viewValue: 'En progreso', isActivo: true },
  { value: 'Dado de Baja', viewValue: 'Dado de Baja', isActivo: false }
];
  listaUsuarios:User[]=[]
  constructor(
    private formBuilder: FormBuilder,
    private oS: ObjetivoAhorroService,
    private router: Router,
    private uS:UserService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id = data['id'];
      this.actualizar = data ['id']!=null;

      this.init();
    });


    this.form = this.formBuilder.group({
      codigo: [''],
      meta: ['', Validators.required],
      montoMeta: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      montoActual: ['', Validators.required],
      estado: ['', Validators.required],
      user: ['', Validators.required]
    });
    this.uS.list().subscribe(data=>{
      this.listaUsuarios=data
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.ObjtivoAhorro.Objetivo_id = this.form.value.codigo
      this.ObjtivoAhorro.nombreMeta = this.form.value.meta
      this.ObjtivoAhorro.montoMeta = this.form.value.montoMeta
      this.ObjtivoAhorro.fechaInicio = this.form.value.fechaInicial
      this.ObjtivoAhorro.fechaFin = this.form.value.fechaFinal
      this.ObjtivoAhorro.montoActual = this.form.value.montoActual
      this.ObjtivoAhorro.estadoObjetivo = this.form.value.estado
      this.ObjtivoAhorro.user.userId = this.form.value.user

      if(this.actualizar){
          this.oS.update(this.ObjtivoAhorro).subscribe(()=>{
            this.oS.list().subscribe(data=>{
              this.oS.setList(data);
            })
          })
      }
      else{
      this.oS.insert(this.ObjtivoAhorro).subscribe(() => {
        this.oS.list().subscribe(data => {
          this.oS.setList(data)
        })
      })
    }
      this.router.navigate(['objetivoahorros'])
    }
  }

  init(){
    if(this.actualizar){
        this.oS.listaId(this.id).subscribe((data)=>{
          this.form = new FormGroup({
           codigo: new FormControl(data.Objetivo_id),
           meta: new FormControl(data.nombreMeta, Validators.required),
           montoMeta: new FormControl(data.montoMeta, Validators.required),
           fechaInicial: new FormControl(data.fechaInicio, Validators.required),
           fechaFinal: new FormControl(data.fechaFin, Validators.required),
           montoActual: new FormControl(data.montoActual, Validators.required),
           estado: new FormControl(data.estadoObjetivo, Validators.required),
           user: new FormControl(data.user.userId, Validators.required)
          })  
        })
    }
  }
}