import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsModel } from '../../../components/products/products.model';
import { LoginService } from '../../services/login/login.service';
import { AddItemsController } from './add-items.controller';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {

  @Input() product: ProductsModel | undefined;
  @Output() applyDiscount = new EventEmitter<boolean>();
  @Output() setQuantity = new EventEmitter<number>();
  

  loggedIn = false;
  quantity: number;
  
  constructor(
    private loginService: LoginService,
    private addItemsController: AddItemsController
  ) { 
    this.loggedInInfo();
    this.quantity = 0;
  }

  ngOnInit(): void {
  }

  loggedInInfo() {
    this.loginService.alreadyLoggedIn().then((loggedIn) => {
      this.loggedIn = loggedIn

      if (loggedIn) {
        this.getQuantity();
      }
    });
  }

  async getQuantity() {
    if (this.product)
      this.quantity = await this.addItemsController.getQuantity(this.product.id);
  }

  addItem() {
    if (this.loggedIn) {
      if (this.product && this.quantity + 1 <= this.product.originalStorage) {
        this.quantity++;
        this.addItemsController.addItem(this.product.id);
        this.emitEvents();
      } else {
        alert('Sem estoque!');
      }
    } else {
      this.loginService.openLoginModal();
    }
  }

  removeItem() {
    if (this.product) {
      this.quantity--;
      this.addItemsController.removeItem(this.product.id);
      this.emitEvents();
    }
  }

  emitEvents() {
    this.quantity >= 10 ? this.applyDiscount.emit(true) : this.applyDiscount.emit(false);
    this.setQuantity.emit(this.quantity);
  }
}
