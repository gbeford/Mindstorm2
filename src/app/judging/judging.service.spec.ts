import { TestBed, inject } from '@angular/core/testing';

import { JudgingService } from './judging.service';

describe('JudgingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JudgingService]
    });
  });

  it('should be created', inject([JudgingService], (service: JudgingService) => {
    expect(service).toBeTruthy();
  }));
});
