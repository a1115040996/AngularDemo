import {Component, ElementRef, OnInit} from '@angular/core';
import {LoginService} from '../serve/login.service';
import {StatusService} from '../serve/status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  myInput: any = 'test'
  _username: any = '默认名称'
  _password: any = 'password'
  containerHeight = 0;

  token = ''
  constructor(
    public element: ElementRef,
    public loginService: LoginService,
    public status: StatusService
  ) {
  }

  ngOnInit() {
    this.containerHeight = window.innerHeight - this.element.nativeElement.querySelector('.m-header').offsetHeight;
  }

  login() {
    // this.loginService.login().then((res)=>{
    //   console.log('success')
    // }).catch((error)=>{
    //   console.log('error')
    // })

  }

}
