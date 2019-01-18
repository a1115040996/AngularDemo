import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private status = {
    isLogin: false,
    token: '123qwe456lkj'
  }

  constructor() {
  }
  setLogin (token) {
    this.status.isLogin = true;
    this.status.token = token
  }

  getToken () {
  }

  setLogout () {
  }
}
