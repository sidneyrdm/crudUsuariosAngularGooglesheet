import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contador = 0;
  nome = 'Sidney brito cavalcanti';
  text = '';

  constructor() { }

  ngOnInit(): void {

    let intervalo = setInterval(() => {
      if (this.contador == 10) {
        clearInterval(intervalo);
      } else
        this.contador += 1;
    }, 2000);
  }

  pessoas = [
    {nome: 'Jonatas',
     idade: 8},
    {nome: 'Sidney',
     idade: 32},
    {nome: 'Pitu',
     idade: 2}
  ];

  clicou(nome: string){
    alert('o nome que clicou é.: '+nome);
  }
}
