import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from './login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BsModalRef,
        BsModalService
      ],
      declarations: [ LoginModalComponent ],
      imports: [
        ModalModule.forRoot(), 
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
