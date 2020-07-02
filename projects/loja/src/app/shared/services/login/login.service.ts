import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from '../../components/login/login-modal/login-modal.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) { }

  public openLoginModal() {
    this.modalService.config.animated = false;
    this.bsModalRef = this.modalService.show(LoginModalComponent, {});
  }
}
