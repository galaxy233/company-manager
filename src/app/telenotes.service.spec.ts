import { TestBed, inject } from '@angular/core/testing';

import { TelenotesService } from './telenotes.service';

describe('TelenotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TelenotesService]
    });
  });

  it('should be created', inject([TelenotesService], (service: TelenotesService) => {
    expect(service).toBeTruthy();
  }));
});
