import { TestBed } from '@angular/core/testing';
import { LoginModalController } from './login-modal.controller';

describe('LoginModalController', () => {
  let service: LoginModalController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: []
    });
    service = TestBed.inject(LoginModalController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
