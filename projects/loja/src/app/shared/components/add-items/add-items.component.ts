import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsModel } from '../../../components/products/products.model';
import { LoginService } from '../../services/login/login.service';
import { AddItemsController } from './add-items.controller';
import { LoginModalController } from '../login/login-modal/login-modal.controller';

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
    private loginController: LoginModalController,
    private addItemsController: AddItemsController
  ) { 
    this.loggedInInfo();
    this.quantity = 0;
  }

  ngOnInit(): void {
    this.loginController.userLoggedInObs.subscribe((loggedIn: boolean) => {
      this.loggedIn = loggedIn;
    });
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
      this.addCurrentProduct();
    } else {
      this.loginService.openLoginModal().then((result) => {
        if (result) {
          this.addCurrentProduct();
        }
      });
    }
  }

  addCurrentProduct() {
    if (this.product && this.quantity + 1 <= this.product.originalStorage) {
      this.quantity++;
      this.addItemsController.addItem(this.product.id);
      this.emitEvents();
    } else {
      alert('Sem estoque!');
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
