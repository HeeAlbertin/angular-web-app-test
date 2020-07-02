import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './components/login/login-modal/login-modal.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BsModalRef
  ],
  exports: [
    LoginModalComponent
  ],
  providers: [
    BsModalRef
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class SharedModule { }
