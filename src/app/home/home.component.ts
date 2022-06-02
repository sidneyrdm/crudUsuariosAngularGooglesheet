import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../shared/services/people.service';
import { Usuario } from '../Usuario';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensagemHome = '';
  @Input() NovoNome: string = '';
  @Input() NovoEmail: string = '';
  @Input() NovaFoto: string = '';
  'usuario': Usuario;
  pessoas = [
    {
      nome: '',
      email: ''
    }
  ];
  'usuarios': Array<Usuario> = [];
  controle = true;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.getPeople();

    this.usuario = new Usuario;
    this.usuario.nome = 'sidney';
    this.usuario.email = 'sidneybritomal@gmail.com';
    this.usuarios.push(this.usuario);

    console.log(this.pessoas);
  }

  teste() {
    this.controle ? this.mensagemHome = 'Aqui é o homeComponent' : this.mensagemHome = '';
    this.controle ? this.controle = false : this.controle = true;
  }

  addUser() {
    console.log('valores inseridos em nome e email.: ' + this.NovoNome + ' - ' + this.NovoEmail)
    if (this.NovoNome !== '') {
      this.usuario = new Usuario;

      this.usuario.nome = this.NovoNome;
      this.usuario.email = this.NovoEmail;

      this.usuarios.push(this.usuario);

      this.NovoNome = '';
      this.NovoEmail = '';
    }
  }

  editar(user: Usuario) {
    this.NovoNome = user.nome;
    this.NovoEmail = user.email;
    this.usuarios.splice(this.usuarios.indexOf(user));
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }

}
