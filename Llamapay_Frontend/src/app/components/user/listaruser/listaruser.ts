import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listaruser',
  imports: [MatTableModule, CommonModule,
    MatButtonModule,
    RouterLink,
    MatIconModule],
  templateUrl: './listaruser.html',
  styleUrl: './listaruser.css'
})
export class Listaruser implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5','c6','c7'];
  constructor(private uS: UserService) { }

  ngOnInit(): void {
    this.uS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

  eliminar(id: number) {
    this.uS.deleteS(id).subscribe(data=>{
      this.uS.list().subscribe(data=>{
        this.uS.setList(data)
      })
    })
    this.uS.getList().subscribe(data => { //actualiza la lista cuando se inserta o actualiza la data
      this.dataSource = new MatTableDataSource(data)
    })
  }
}