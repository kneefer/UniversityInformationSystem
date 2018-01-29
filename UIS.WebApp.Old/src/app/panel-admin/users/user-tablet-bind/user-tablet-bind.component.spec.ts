import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabletBindComponent } from './user-tablet-bind.component';

describe('UserTabletBindComponent', () => {
  let component: UserTabletBindComponent;
  let fixture: ComponentFixture<UserTabletBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTabletBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabletBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
