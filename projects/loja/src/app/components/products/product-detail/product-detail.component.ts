import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsModel } from '../products.model';
import { ProductDetailController } from './product-detail.controller';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: ProductsModel | undefined;
  showDiscount: boolean;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private productDetailController: ProductDetailController
  ) {
    this.showDiscount = false;
  } 

  ngOnInit() {
    this.sub = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((id) => {
      if (id) {
        this.product = this.getProduct(+id);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProduct(id: number): ProductsModel {
    return this.productDetailController.getProduct(id);
  }

  applyDiscount(apply: boolean) { 
    this.showDiscount = apply;
  }

}
