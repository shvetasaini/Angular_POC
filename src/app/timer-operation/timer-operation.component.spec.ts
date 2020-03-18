import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerOperationComponent } from './timer-operation.component';

describe('TimerOperationComponent', () => {
  let component: TimerOperationComponent;
  let fixture: ComponentFixture<TimerOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
