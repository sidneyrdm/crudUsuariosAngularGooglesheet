import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    
    let usuarios = [
      {
        nome: 'sidney',
        email: 'sidneybritomal@gmail.com'
      },
      {
        nome: 'Jonatas',
        email: 'jonatas18k@gmail.com'
      },
    ];

    return of(usuarios);
  }
}
