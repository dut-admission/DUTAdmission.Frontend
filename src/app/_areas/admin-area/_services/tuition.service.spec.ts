import { TestBed } from '@angular/core/testing';

import { TuitionService } from './tuition.service';

describe('TuitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TuitionService = TestBed.get(TuitionService);
    expect(service).toBeTruthy();
  });
});
