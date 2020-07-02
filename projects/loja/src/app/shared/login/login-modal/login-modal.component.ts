import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {


  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide();
  }
}
