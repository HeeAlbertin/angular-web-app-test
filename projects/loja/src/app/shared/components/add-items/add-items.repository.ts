import { Injectable } from '@angular/core';
import { DataStorageService } from '../../services/data-storage/data-storage.service';
import { DATA_STORAGE } from '../../services/data-storage/data-storage.constants';
import { ProductsRepository } from '../../../components/products/products.repository';
import { ProductsModel } from '../../../components/products/products.model';

@Injectable({
  providedIn: 'root'
})
export class AddItemsRepository {

    constructor(
        private dataStorageService: DataStorageService,
        private productsRepository: ProductsRepository
    ) { }

    private getAllProducts() {
        return this.productsRepository.getAllProducts();
    }
    
    private async getAllCartProducts() {
        return await this.dataStorageService.get(DATA_STORAGE.PRODUTO)
    }
    
    async getQuantity(id: number) {
        const products = await this.getAllCartProducts();
        if (products) {
            const currentProduct = products.find((p: ProductsModel) => p.id == id);
            if (currentProduct) {
                return currentProduct.quantity;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    async addItem(id: number) {
        let cartProducts = await this.getAllCartProducts();
        const allProducts = this.getAllProducts();
        let currentProduct: ProductsModel = Object.assign({}, allProducts.find((p: ProductsModel) => p.id == id));
        currentProduct.quantity = 1;
        if (cartProducts) {
            let actualProduct = cartProducts.find((p: ProductsModel) => p.id == id);
            if (actualProduct) {
                actualProduct.quantity++;
                actualProduct.showDiscount = actualProduct.quantity >= 10;
            } else {
                cartProducts.push(currentProduct);
            }
        } else {
            cartProducts = [];
            cartProducts.push(currentProduct);
        }
        
        this.dataStorageService.store(DATA_STORAGE.PRODUTO, cartProducts);
        return currentProduct.quantity;
    }

    async removeItem(id: number) {
        const cartProducts = await this.getAllCartProducts();
        const currentProduct = cartProducts.find((p: ProductsModel) => p.id == id);

        currentProduct.quantity--;
        currentProduct.showDiscount = currentProduct.quantity >= 10;

        this.dataStorageService.store(DATA_STORAGE.PRODUTO, cartProducts);
        return currentProduct.quantity;
    }

    async getTotalQuantity(): Promise<number> {
        const cartProducts = await this.getAllCartProducts();
        // com reduce não funcionou por possibilidade de undefined
        let total = 0;
        cartProducts.forEach((p: ProductsModel) => {
            if (p.quantity)
                total += p.quantity
        });
        return total;
    }
}
