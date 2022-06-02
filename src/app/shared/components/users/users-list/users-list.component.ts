import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User> = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
    //this.testeGetUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data => {
      this.users = data;
    }));
    console.log(this.users);
  }

  testeGetUsers() {
    let url = 'https://api.sheety.co/f5a64236d448d4bd6b7d42de631dc2c3/usuarios/página1';
    fetch(url)
      .then((response) => response.json())
      .then(json => {
        console.log('Estou aqui dentro');
        // Do something with the data
        console.log(json.página1S);
      });
  }

  deleteUser(id: number): void{
    this.userService.deleteUser(id)
    .subscribe(result => {
      console.log('Usuário excluído!')
      this.getUsers();
    })
  }

}
