import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AddItemsModule } from '../../../shared/components/add-items/add-items.module';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    AddItemsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class ProductDetailModule { }
