import { Injectable } from '@angular/core';
import { ProductsModel } from '../products.model';
import { ProductsRepository } from '../products.repository';

@Injectable({
  providedIn: 'root'
})
export class ProductCartController {


  constructor(
    private productsRepository: ProductsRepository
  ) {}

  async getProducts() {
    return await this.productsRepository.getAllCartProducts();
  }

}
