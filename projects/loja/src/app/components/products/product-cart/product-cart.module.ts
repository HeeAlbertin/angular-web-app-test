import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCartRoutingModule } from './product-cart-routing.module';
import { ProductCartComponent } from './product-cart.component';
import { AddItemsModule } from '../../../shared/components/add-items/add-items.module';


@NgModule({
  declarations: [ProductCartComponent],
  imports: [
    CommonModule,
    ProductCartRoutingModule,
    AddItemsModule
  ]
})
export class ProductCartModule { }
