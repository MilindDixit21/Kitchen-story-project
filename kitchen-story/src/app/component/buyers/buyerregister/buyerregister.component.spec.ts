import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRegisterComponent } from './buyerregister.component';

describe('RegisterComponent', () => {
  let component: BuyerRegisterComponent;
  let fixture: ComponentFixture<BuyerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
