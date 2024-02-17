import { TestBed } from '@angular/core/testing';

import { AboutFoodService } from './about-food.service';

describe('AboutFoodService', () => {
  let service: AboutFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
