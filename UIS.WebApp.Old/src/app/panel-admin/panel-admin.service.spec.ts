import { TestBed, inject } from '@angular/core/testing';
import { PanelAdminService } from './panel-admin.service';

describe('PanelAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelAdminService]
    });
  });

  it('should ...', inject([PanelAdminService], (service: PanelAdminService) => {
    expect(service).toBeTruthy();
  }));
});
