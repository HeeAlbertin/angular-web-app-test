import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login/login.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  openLoginModal() {
    this.loginService.openLoginModal();
  }

}
