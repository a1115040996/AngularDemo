import { NgModule } from '@angular/core';
import {MInputComponent} from './m-input/m-input.component';
import {BindDirective} from '../directive/bind.directive';
import {FormsModule} from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { MInputIconComponent } from './m-input-icon/m-input-icon.component';
// 自定义组件
@NgModule({
  declarations: [
    MInputComponent,
    BindDirective,
    FormInputComponent,
    MInputIconComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    MInputComponent,
    MInputIconComponent,
    BindDirective
  ],
  providers: [],
})
export class ComponentsModule { }
