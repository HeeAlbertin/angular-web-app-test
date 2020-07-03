import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { AddItemsComponent } from './add-items.component';

describe('AddItemsComponent', () => {
  let component: AddItemsComponent;
  let fixture: ComponentFixture<AddItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BsModalRef,
        BsModalService
      ],
      declarations: [ AddItemsComponent ],
      imports: [
        ModalModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
