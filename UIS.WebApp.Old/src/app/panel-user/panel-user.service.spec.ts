import { TestBed, inject } from '@angular/core/testing';
import { PanelUserService } from './panel-user.service';

describe('PanelUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelUserService]
    });
  });

  it('should ...', inject([PanelUserService], (service: PanelUserService) => {
    expect(service).toBeTruthy();
  }));
});
