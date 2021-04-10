import { TestBed } from '@angular/core/testing';

import { NgxDateRangePickerService } from './ngx-date-range-picker.service';

describe('NgxDateRangePickerService', () => {
  let service: NgxDateRangePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDateRangePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
