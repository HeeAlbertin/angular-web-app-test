import { TestBed } from '@angular/core/testing';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BsModalRef,
        BsModalService
      ],
      imports: [ModalModule.forRoot()]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
