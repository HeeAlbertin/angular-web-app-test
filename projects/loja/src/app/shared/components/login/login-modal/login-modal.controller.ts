import { Injectable } from '@angular/core';
import { LOGIN } from '../../../mocks/login.mock';
import { DataStorageService } from '../../../services/data-storage/data-storage.service';
import { DATA_STORAGE } from '../../../services/data-storage/data-storage.constants';
import { Subject } from 'rxjs';
import { UserModel } from './login-modal.model';

@Injectable({
  providedIn: 'root'
})
export class LoginModalController {

  private _userLoggedIn: Subject<boolean> = new Subject<boolean>();
  public userLoggedInObs = this._userLoggedIn.asObservable();

  constructor(
    private dataStorage: DataStorageService
  ) {}

  public doLogin(loginData: UserModel) {
    if (loginData.email == LOGIN.EMAIL && loginData.password == LOGIN.SENHA) {
      this.dataStorage.store(DATA_STORAGE.USUARIO, {'email':loginData.email});
      this._userLoggedIn.next(true);
      return true;
    } else {
      return false;
    }
  }

}
