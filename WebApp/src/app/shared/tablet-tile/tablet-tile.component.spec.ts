import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletTileComponent } from './tablet-tile.component';

describe('TabletTileComponent', () => {
  let component: TabletTileComponent;
  let fixture: ComponentFixture<TabletTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
