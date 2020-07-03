import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from '../../components/login/login-modal/login-modal.component';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../data-storage/data-storage.service';
import { DATA_STORAGE } from '../data-storage/data-storage.constants';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private dataStorage: DataStorageService
  ) { }

  public openLoginModal() {
    this.modalService.config.animated = false;
    this.bsModalRef = this.modalService.show(LoginModalComponent, {});
  }

  public async alreadyLoggedIn(): Promise<boolean> {
    const item = await this.dataStorage.get(DATA_STORAGE.USUARIO);
    return item;
  }
}
