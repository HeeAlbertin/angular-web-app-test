import { Injectable } from '@angular/core';
import { ProductsModel } from '../products.model';
import { ProductsRepository } from '../products.repository';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailController {


  constructor(
    private productsRepository: ProductsRepository
  ) {}

  getProduct(id: number): ProductsModel {
    return this.productsRepository.getProduct(id);
  }

}
