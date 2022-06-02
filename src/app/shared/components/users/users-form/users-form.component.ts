import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  userForm: FormGroup;
  users: Array<User> = [];
  'userId': string | null;
  funcao = 'Cadastrar';

  constructor(private fb: FormBuilder, private userService: UserServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.userForm = fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: ''
    })
  }

  ngOnInit(): void {
    this.funcao = 'Cadastrar';
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log('ID.: ' + this.userId);
      if (this.userId !== null) {
        this.funcao = 'Atualizar';
        this.userService.getUser(this.userId).subscribe(result => {
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao
          })
        })
      }
    })
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(result => {
      this.users = result;
    });
  }

  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    console.log(this.userForm.value);
    this.userService.postUser(this.userForm.value)
      .subscribe(result => {
        console.log(`Usuário ${result.nome} cadastrado com sucesso!`);
      }
        , (err) => {

        }, () => {
          this.router.navigate(['/']);
        });
  }

  actionButton() {
    if (this.userId !== null) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  updateUser() {
    if (this.userId !== null) {
      this.userService.updateUser(this.userId, this.userForm.value)
        .subscribe(result => {
          console.log('usuário atualizado.: ' + result);
        }, (err) => {

        }, () => {
          this.router.navigate(['/']);
        })
    }
  }
}
