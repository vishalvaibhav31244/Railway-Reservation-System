import { TestBed } from '@angular/core/testing';

import { TrainsinfoService } from './trainsinfo.service';

describe('TrainsinfoService', () => {
  let service: TrainsinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainsinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
