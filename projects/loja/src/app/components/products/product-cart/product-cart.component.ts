import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from '../products.repository';
import { ProductsModel } from '../products.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  showDiscount: boolean;
  products: ProductsModel[] | undefined;

  constructor(
    private productsRepository: ProductsRepository
  ) { 
    this.showDiscount = false;
  }

  ngOnInit(): void {
    this.getAllCartProducts();
  }

  getAllCartProducts() {
    this.productsRepository.getAllCartProducts().then((products: ProductsModel[]) => {
      this.products = products;
    })
  }

  applyDiscount(apply: boolean) { 
    this.showDiscount = apply;
  }
}
