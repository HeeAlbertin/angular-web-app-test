import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login/login.service';
import { LoginModalController } from '../../shared/components/login/login-modal/login-modal.controller';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  loggedIn = false;

  constructor(
    private loginController: LoginModalController,
    private loginService: LoginService
  ) { 
    this.loggedInInfo();
  }

  ngOnInit(): void {
    this.loginController.userLoggedInObs.subscribe((loggedIn: boolean) => {
      this.loggedIn = loggedIn;
    });
  }

  loggedInInfo() {
    this.loginService.alreadyLoggedIn().then((loggedIn) => {
      this.loggedIn = loggedIn
    });
  }

  openLoginModal() {
    this.loginService.openLoginModal();
  }
}
