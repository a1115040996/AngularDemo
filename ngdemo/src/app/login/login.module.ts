import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';
import {ComponentsModule} from '../components/components.module';
import 'element-angular/theme/index.css';
import {ElModule} from 'element-angular/release/element-angular.module';
import {HeightDirective} from '../directive/height.directive';
import {IndexService} from '../serve/index.service';
import {LoginService} from '../serve/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    LoginComponent,
    HeightDirective
  ],
  imports: [
    ComponentsModule,
    ElModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    IndexService
  ],
  bootstrap: [],
})
export class LoginModule { }
