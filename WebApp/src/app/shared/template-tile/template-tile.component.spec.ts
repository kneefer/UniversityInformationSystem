import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTileComponent } from './template-tile.component';

describe('TemplateTileComponent', () => {
  let component: TemplateTileComponent;
  let fixture: ComponentFixture<TemplateTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
