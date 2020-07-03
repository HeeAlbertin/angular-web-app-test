import { Component, OnInit } from '@angular/core';
import { ProductListController } from './product-list.controller';
import { ProductsModel } from '../products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductsModel[] = [];

  constructor(
    private productListController: ProductListController
  ) { 
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.products = this.productListController.getProducts();
  }
}
