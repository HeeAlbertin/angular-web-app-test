import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login/login-modal/login-modal.component';
import { LoginButtonComponent } from './login/login-button/login-button.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [LoginModalComponent, LoginButtonComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    LoginModalComponent,
    LoginButtonComponent
  ],
  providers: [
    BsModalRef
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class SharedModule { }
