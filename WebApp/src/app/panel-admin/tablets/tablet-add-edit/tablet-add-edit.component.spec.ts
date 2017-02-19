import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletAddEditComponent } from './tablet-add-edit.component';

describe('TabletAddEditComponent', () => {
  let component: TabletAddEditComponent;
  let fixture: ComponentFixture<TabletAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
