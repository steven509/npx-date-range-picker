import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDateRangePickerComponent } from './ngx-date-range-picker.component';

describe('NgxDateRangePickerComponent', () => {
  let component: NgxDateRangePickerComponent;
  let fixture: ComponentFixture<NgxDateRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDateRangePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
