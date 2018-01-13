import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMnComponent } from './product-mn.component';

describe('ProductMnComponent', () => {
  let component: ProductMnComponent;
  let fixture: ComponentFixture<ProductMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
