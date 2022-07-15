import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();

  }

  getUser() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    }, (err) => {
      console.log('ERRO AO EXECUTAR', err)
    })
  }
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(response => {
      alert('Usuario excluido');

    }, (err) => {
      console.log(err)
    },
      () => {
        this.getUser();
      }
    )
  }
}
