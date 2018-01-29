import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletUserBindComponent } from './tablet-user-bind.component';

describe('TabletUserBindComponent', () => {
  let component: TabletUserBindComponent;
  let fixture: ComponentFixture<TabletUserBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletUserBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletUserBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
