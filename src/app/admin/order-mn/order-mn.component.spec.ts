import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMnComponent } from './order-mn.component';

describe('OrderMnComponent', () => {
  let component: OrderMnComponent;
  let fixture: ComponentFixture<OrderMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
