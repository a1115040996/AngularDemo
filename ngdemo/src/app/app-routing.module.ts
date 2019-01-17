import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { OrderComponent } from './core/content/order/order.component';
import {ProductComponent} from './core/content/product/product.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'order', component: OrderComponent },
      { path: 'product', component: ProductComponent },
    ]
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
