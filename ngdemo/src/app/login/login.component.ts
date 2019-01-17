import {Component, ElementRef, OnInit} from '@angular/core';
import {LoginService} from '../serve/login.service';
import {HttpClient} from '@angular/common/http';

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
  constructor(
    public element: ElementRef,
    public loginService: LoginService,
    public myhttp: HttpClient
  ) {}

  ngOnInit() {
    this.containerHeight = window.innerHeight - this.element.nativeElement.querySelector('.m-header').offsetHeight;
  }

  login() {
    // this.myhttp.get('http://www.baidu.com').subscribe(data => {
    //   console.log(data)
    // });
    this.loginService.login().then((res)=>{
      console.log('success')
    }).catch((error)=>{
      console.log('error')
    })
  }

}
