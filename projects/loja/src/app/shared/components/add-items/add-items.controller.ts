import { Injectable } from '@angular/core';
import { AddItemsRepository } from './add-items.repository';

@Injectable({
  providedIn: 'root'
})
export class AddItemsController {


    constructor(
        private addItemsRepository: AddItemsRepository
    ) {}

    getQuantity(id: number) {
        return this.addItemsRepository.getQuantity(id);
    }

    addItem(id: number) {
        this.addItemsRepository.addItem(id);
    }

    removeItem(id: number) {
        this.addItemsRepository.removeItem(id);
    }
}
