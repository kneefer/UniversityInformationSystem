import { TestBed, inject } from '@angular/core/testing';
import { PreviewService } from './preview.service';

describe('PreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviewService]
    });
  });

  it('should ...', inject([PreviewService], (service: PreviewService) => {
    expect(service).toBeTruthy();
  }));
});
