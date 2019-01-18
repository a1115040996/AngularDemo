import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable ()
export class LoginService {
  BASE_URL = environment.BASE_URL; // 接口地址
  constructor (public http: HttpClient) {
  }

  // 登陆接口
  login(){
    return this.http.get(this.BASE_URL + "/api/user").toPromise();
  }
}
