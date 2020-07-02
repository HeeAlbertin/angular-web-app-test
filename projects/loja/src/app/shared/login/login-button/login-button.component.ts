import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  
  

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  openLoginModal() {
    this.bsModalRef = this.modalService.show(LoginModalComponent, {});
  }
}
