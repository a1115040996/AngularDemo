import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable ()
export class LoginService {
  const BASE_URL = environment.BASE_URL;
  constructor (public http: HttpClient) {
  }

  login(){
    return this.http.get(this.BASE_URL + "/api/user").toPromise();
  }
}
