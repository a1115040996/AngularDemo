import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { OrderComponent } from './content/order/order.component';
import {AppRoutingModule} from '../app-routing.module';
import { ProductComponent } from './content/product/product.component';
import {ComponentsModule} from '../components/components.module';
// 自定义组件
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SlideMenuComponent,
    OrderComponent,
    ProductComponent
  ],
  imports: [
    AppRoutingModule,
  ],
  providers: [],
})
export class CoreModule { }
