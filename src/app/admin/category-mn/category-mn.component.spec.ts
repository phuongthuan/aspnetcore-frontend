import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMnComponent } from './category-mn.component';

describe('CategoryMnComponent', () => {
  let component: CategoryMnComponent;
  let fixture: ComponentFixture<CategoryMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
