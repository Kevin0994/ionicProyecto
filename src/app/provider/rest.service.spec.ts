import { TestBed } from '@angular/core/testing';

import { RestProvider } from './rest.service';

describe('RestProvider', () => {
  let service: RestProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
