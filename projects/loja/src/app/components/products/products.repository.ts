import { Injectable } from '@angular/core';
import { ProductsModel } from './products.model';
import { PRODUTOS } from '../../shared/mocks/product.mock';
import { DataStorageService } from '../../shared/services/data-storage/data-storage.service';
import { DATA_STORAGE } from '../../shared/services/data-storage/data-storage.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepository {

    constructor(
        private dataStorageService: DataStorageService
    ) { }

    getAllProducts(): ProductsModel[] {
        return PRODUTOS;
    }

    getProduct(id: number): ProductsModel {
        return PRODUTOS.filter((p) => p.id == id)[0];
    }

    async getAllCartProducts(): Promise<ProductsModel[]> {
        return await this.dataStorageService.get(DATA_STORAGE.PRODUTO);
    }
}
