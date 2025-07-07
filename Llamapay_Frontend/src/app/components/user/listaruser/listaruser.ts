import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-listaruser',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './listaruser.html',
  styleUrl: './listaruser.css'
})
export class Listaruser implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Carga inicial
    this.userService.list().subscribe(data => {
      this.dataSource.data = data;
    });

    // Suscripción para mantener la lista sincronizada
    this.userService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  verDetalle(user: User): void {
    alert(
      `Nombre: ${user.nameUser} ${user.lastnameUser}\n` +
      `Username: ${user.username}\n` +
      `Correo: ${user.emailUser}\n` +
      `Fecha de nacimiento: ${new Date(user.birthdayUser).toLocaleDateString()}\n` +
      `Fecha de registro: ${new Date(user.registrationDateUser).toLocaleDateString()}`
    );
  }

  eliminar(userId: number): void {
    const confirmacion = confirm('¿Deseas eliminar este usuario? Esta acción no se puede deshacer.');
    if (confirmacion) {
      this.userService.deleteS(userId).subscribe(() => {
        this.userService.list().subscribe(data => {
          this.userService.setList(data); // actualiza lista compartida
        });
      });
    }
  }
}
