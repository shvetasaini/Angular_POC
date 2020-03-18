import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerActionRecordComponent } from './timer-action-record.component';

describe('TimerActionRecordComponent', () => {
  let component: TimerActionRecordComponent;
  let fixture: ComponentFixture<TimerActionRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerActionRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerActionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
