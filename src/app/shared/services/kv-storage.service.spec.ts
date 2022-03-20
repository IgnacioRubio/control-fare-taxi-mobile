import { TestBed } from '@angular/core/testing';

import { KvStorageService } from './kv-storage.service';

describe('KvStorageService', () => {
  let service: KvStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KvStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
