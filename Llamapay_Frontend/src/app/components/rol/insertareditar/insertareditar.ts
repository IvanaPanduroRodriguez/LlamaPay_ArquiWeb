import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { Rol } from '../../../models/rol';
import { RolService } from '../../../services/rol.service';

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
export class InsertareditarRol implements OnInit {
  form: FormGroup = new FormGroup({})

  rol: Rol = new Rol()

  TipoRol:{value:string;viewValue:string}[]=[
    {value:'ROLE_ADMIN',viewValue:'ROLE_ADMIN'},
    {value:'TESTER',viewValue:'TESTER'},
    {value:'ROLE_USER',viewValue:'ROLE_USER'}
  ]

  listaUsuarios:User[]=[]

  constructor(
    private formBuilder: FormBuilder,
    private oS: RolService,
    private router: Router,
    private uS:UserService
  ) { }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      roles: ['', Validators.required],
      user: ['', Validators.required]
    })
    this.uS.list().subscribe(data=>{
      this.listaUsuarios=data
    })
  }
  aceptar() {
    if (this.form.valid) {
      this.rol.tipoRol = this.form.value.roles
      this.rol.user.nameUser = this.form.value.user
      this.oS.insert(this.rol).subscribe(() => {
        this.oS.list().subscribe(data => {
          this.oS.setList(data)
        })
      })
      this.router.navigate(['roles'])
    } 
  }
}