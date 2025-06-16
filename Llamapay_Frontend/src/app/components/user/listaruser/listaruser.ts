import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-listaruser',
  imports: [MatTableModule],
  templateUrl: './listaruser.html',
  styleUrl: './listaruser.css'
})
export class Listaruser implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5','c6','c7','c8','c9'];
  constructor(private uS: UserService) { }

  ngOnInit(): void {
    this.uS.list().subscribe(data => {
        this.dataSource = new MatTableDataSource(data)
    })
    this.uS.getList().subscribe(data => { //actualiza la lista cuando se inserta o actualiza la data
      this.dataSource = new MatTableDataSource(data)
    })
  }
}