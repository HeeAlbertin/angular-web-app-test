import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsModel } from '../products.model';
import { ProductDetailController } from './product-detail.controller';
import { AddItemsController } from '../../../shared/components/add-items/add-items.controller';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: ProductsModel | undefined;
  showDiscount: boolean;
  quantity: number;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private productDetailController: ProductDetailController,
    private addItemsController: AddItemsController
  ) {
    this.showDiscount = false;
    this.quantity = 0;
  } 

  ngOnInit() {
    this.sub = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      if (id) {
        this.product = this.getProduct(+id);
        this.getQuantity(+id);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProduct(id: number): ProductsModel {
    return this.productDetailController.getProduct(id);
  }

  async getQuantity(id: number) {
    this.quantity = await this.addItemsController.getQuantity(id);
    
    if (this.quantity >= 10) {
      this.applyDiscount(true);
    }
  }

  setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  applyDiscount(apply: boolean) { 
    this.showDiscount = apply;
  }

}
