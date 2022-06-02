import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiUrl = 'https://sheet.best/api/sheets/0b80777b-9c58-4724-afb0-6cab65770943';
  // apiUrl = 'https://api.sheety.co/f5a64236d448d4bd6b7d42de631dc2c3/usuarios/página1';

  httpOptions = {
    headers: new HttpHeaders
  }

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }

  updateUser(id: string, user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user);
  }

  getUser(id: string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }

}
