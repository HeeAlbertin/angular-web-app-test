import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModalController } from './login-modal.controller';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private loginController: LoginModalController
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide();
  }

  onSubmit() {
    const loginResult = this.loginController.doLogin(this.loginForm.value);

    if (loginResult) {
      this.close();
    } else {
      alert('Login inválido!')
    }
  }
}
