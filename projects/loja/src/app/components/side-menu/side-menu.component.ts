import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login/login.service';
import { LoginModalController } from '../../shared/components/login/login-modal/login-modal.controller';
import { AddItemsController } from '../../shared/components/add-items/add-items.controller';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  loggedIn = false;
  totalItems = 0;

  constructor(
    private loginController: LoginModalController,
    private loginService: LoginService,
    private addItemsController: AddItemsController
  ) { 
    this.loggedInInfo();
    this.totalItemsInfo();
  }

  ngOnInit(): void {
    this.loginController.userLoggedInObs.subscribe((loggedIn: boolean) => {
      this.loggedIn = loggedIn;
    });

    this.addItemsController.totalQuantityObs.subscribe((totalItems) => {
      this.totalItems = totalItems;
    });
  }

  loggedInInfo() {
    this.loginService.alreadyLoggedIn().then((loggedIn) => {
      this.loggedIn = loggedIn
    });
  }

  totalItemsInfo() {
    this.addItemsController.getTotalQuantity().then((total) => {
      this.totalItems = total;
    })
  }

  openLoginModal() {
    this.loginService.openLoginModal();
  }
}
