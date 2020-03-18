import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDateTimeRecordComponent } from './timer-date-time-record.component';

describe('TimerDateTimeRecordComponent', () => {
  let component: TimerDateTimeRecordComponent;
  let fixture: ComponentFixture<TimerDateTimeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerDateTimeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerDateTimeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
