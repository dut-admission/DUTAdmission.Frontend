import { TestBed } from '@angular/core/testing';

import { TuitionTypeService } from './tuition-type.service';

describe('TuitionTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TuitionTypeService = TestBed.get(TuitionTypeService);
    expect(service).toBeTruthy();
  });
});
