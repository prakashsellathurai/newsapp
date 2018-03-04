import { TestBed, inject } from '@angular/core/testing';

import { NewsapiService } from './newsapi.service';

describe('NewsapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsapiService]
    });
  });

  it('should be created', inject([NewsapiService], (service: NewsapiService) => {
    expect(service).toBeTruthy();
  }));
});
