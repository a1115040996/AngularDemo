import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import module
import { ElModule } from 'element-angular';


// 导入核心组件
// if you use webpack, import style
import 'element-angular/theme/index.css';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {LoginModule} from './login/login.module';
import {InterceptService} from './serve/intercept.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {LoginStoreService} from './serve/login.store.service';


// 自定义组件

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ElModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    StoreModule.forRoot({
      loginStore: LoginStoreService
    })
  ],
  providers: [
    // 请求拦截器
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
