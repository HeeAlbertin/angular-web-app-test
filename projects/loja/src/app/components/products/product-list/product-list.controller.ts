import { Injectable } from '@angular/core';
import { ProductsModel } from '../products.model';
import { ProductsRepository } from '../products.repository';

@Injectable({
  providedIn: 'root'
})
export class ProductListController {


  constructor(
    private productsRepository: ProductsRepository
  ) {}

  getProducts(): ProductsModel[] {
    return this.productsRepository.getAllProducts();
  }

}
