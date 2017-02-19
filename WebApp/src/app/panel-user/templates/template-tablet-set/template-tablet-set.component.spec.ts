import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTabletSetComponent } from './template-tablet-set.component';

describe('TemplateTabletSetComponent', () => {
  let component: TemplateTabletSetComponent;
  let fixture: ComponentFixture<TemplateTabletSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTabletSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTabletSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
