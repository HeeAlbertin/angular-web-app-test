import { Injectable } from '@angular/core';
import { AddItemsRepository } from './add-items.repository';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddItemsController {

    private _totalQuantity: Subject<number> = new Subject<number>();
    public totalQuantityObs = this._totalQuantity.asObservable();

    constructor(
        private addItemsRepository: AddItemsRepository
    ) {}

    getQuantity(id: number) {
        return this.addItemsRepository.getQuantity(id);
    }

    addItem(id: number) {
        this.addItemsRepository.addItem(id).then(() => {
            this.getTotalQuantity().then((total: number) => {
                this._totalQuantity.next(total);
            })
        });
    }

    removeItem(id: number) {
        this.addItemsRepository.removeItem(id).then(() => {
            this.getTotalQuantity().then((total: number) => {
                this._totalQuantity.next(total);
            })
        });
    }

    async getTotalQuantity() {
        return await this.addItemsRepository.getTotalQuantity();
    }
}
