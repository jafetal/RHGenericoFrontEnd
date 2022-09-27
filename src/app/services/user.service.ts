import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.urlBackend + 'User/';

  constructor(public http: HttpClient) {}

  create(user: User) {
    return this.http.post<number>(this.url + 'create', user);
  }

  update(user: User) {
    return this.http.put<void>(this.url + 'update', user);
  }

  delete(idUser: number) {
    return this.http.delete<void>(this.url + `delete/${idUser}`);
  }

  get() {
    return this.http.get<User[]>(this.url + "get");
  }

  getbyid(idUser: number) {
    return this.http.get<User[]>(this.url + `/${idUser}`);
  }
}
