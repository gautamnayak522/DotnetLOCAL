import { TestBed } from '@angular/core/testing';

import { StudentServiveService } from './student-servive.service';

describe('StudentServiveService', () => {
  let service: StudentServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
