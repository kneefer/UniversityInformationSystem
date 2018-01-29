import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTileComponent } from './entry-tile.component';

describe('EntryTileComponent', () => {
  let component: EntryTileComponent;
  let fixture: ComponentFixture<EntryTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
