import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-insertareditar',
  standalone: true,
  templateUrl: './insertareditar.html',
  styleUrl: './insertareditar.css',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    RouterLink
  ]
})
export class InsertareditarUser implements OnInit {
  form: FormGroup = new FormGroup({});
  user: User = new User();
  id: number = 0;
  edicion: boolean = false;
  modoPerfil: boolean = false;

  constructor(
    private uS: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameUser: ['', Validators.required],
      lastnameUser: ['', Validators.required],
      emailUser: ['', [Validators.required, Validators.email]],
      birthdayUser: ['', Validators.required],
      username: ['', Validators.required],
      password: [''],
      enabled: [true, Validators.required]
    });

    this.route.url.subscribe(url => {
      this.modoPerfil = url.some(segment => segment.path === 'perfil');
    });

    this.route.params.subscribe((data: Params) => {
      if (data['id']) {
        this.id = data['id'];
        this.edicion = true;
        this.cargarUsuarioPorId(this.id);
      } else if (this.modoPerfil) {
        const username = this.loginService.getUsername();
        if (username) {
          this.uS.findByUsername(username).subscribe(user => {
            this.user = user;
            this.setFormValues(user);
            this.edicion = true;
          });
        }
      }
    });
  }

  setFormValues(user: User): void {
    this.form.patchValue({
      nameUser: user.nameUser,
      lastnameUser: user.lastnameUser,
      emailUser: user.emailUser,
      birthdayUser: user.birthdayUser,
      username: user.username,
      enabled: user.enabled
    });
  }

  cargarUsuarioPorId(id: number): void {
    this.uS.listId(id).subscribe(data => {
      this.user = data;
      this.setFormValues(data);
    });
  }

  aceptar(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    this.user.nameUser = this.form.value.nameUser;
    this.user.lastnameUser = this.form.value.lastnameUser;
    this.user.emailUser = this.form.value.emailUser;
    this.user.birthdayUser = this.form.value.birthdayUser;
    this.user.username = this.form.value.username;
    this.user.enabled = this.form.value.enabled;

    if (!this.edicion) {
      this.user.password = this.form.value.password;
    }

    if (this.edicion) {
      this.uS.update(this.user).subscribe(() => {
        if (this.modoPerfil) {
          alert('Perfil actualizado correctamente.');
          this.router.navigate(['/home']);
        } else {
          this.uS.list().subscribe(data => {
            this.uS.setList(data);
            this.router.navigate(['/users']);
          });
        }
      });
    } else {
      this.uS.insert(this.user).subscribe(() => {
        this.uS.list().subscribe(data => {
          this.uS.setList(data);
        });
        this.router.navigate(['/users']);
      });
    }
  }
}
