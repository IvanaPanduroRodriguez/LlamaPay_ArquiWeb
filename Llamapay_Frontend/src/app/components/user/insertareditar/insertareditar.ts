import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
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
export class InsertareditarUser implements OnInit{ //4
  form: FormGroup = new FormGroup({});//1 y del angular
  user: User = new User();//2 y tiene que ser del models
  

  constructor(private uS: UserService,private router: Router,private formBuilder: FormBuilder){ //tiene que ser del angular material
  }
  ngOnInit(): void {
      this.form = this.formBuilder.group({ //creamos el cuerpo del post
        name: ['', Validators.required], //5
        lastname: ['', Validators.required],
        email:['', Validators.required],
        birthday:['', Validators.required],
        registrationDate:['', Validators.required],
        username:['', Validators.required],
        password:['', Validators.required],
        enabled:['', Validators.required],
    })
  }

  //metodo aceptar
  aceptar(){
    if(this.form.valid){
      this.user.nameUser = this.form.value.name; 
      this.user.lastnameUser = this.form.value.lastname;
      this.user.emailUser = this.form.value.email;
      this.user.birthdayUser=this.form.value.birthday;
      this.user.registrationDateUser=this.form.value.registrationDate;
      this.user.username = this.form.value.username;
      this.user.password = this.form.value.password;
      this.user.enabled = this.form.value.enabled;

      this.uS.insert(this.user).subscribe(data => {
        this.uS.list().subscribe(data => { 
          this.uS.setList(data); 
        });
        this.router.navigate(['/users']); //9
      }
      )
    }
  }
}

