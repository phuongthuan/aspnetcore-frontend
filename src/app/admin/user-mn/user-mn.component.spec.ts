import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMnComponent } from './user-mn.component';

describe('UserMnComponent', () => {
  let component: UserMnComponent;
  let fixture: ComponentFixture<UserMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
