import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-timer-operation",
  templateUrl: "./timer-operation.component.html",
  styleUrls: ["./timer-operation.component.css"]
})
export class TimerOperationComponent implements OnInit {
  timerInputdata: number = 0;

  @Output() timerInputdataEvent = new EventEmitter<number>();
  @Output() startPauseEvent = new EventEmitter<boolean>();
  @Output() startedOrPauseAtEvent = new EventEmitter<string>();
  @Output() totalStartedCountEvent = new EventEmitter<number>();
  @Output() totalpausedCountEvent = new EventEmitter<number>();
  startCountToRecord: number = 0;
  pausedCountToRecord: number = 0;
  @Input() pausedAtCount: number[] = [];

  constructor() {}

  ngOnInit() {}

  sendTimerInputdata() {
    this.timerInputdataEvent.emit(this.timerInputdata);
  }

  onStartButtonClick(event) {
    if (this.timerInputdata === 0) {
      alert("Pleas enter time limit");
      return;
    }
    var element = event.target;
    var isStarted = JSON.parse(element.dataset["isstarted"]) ? true : false;

    this.startPauseEvent.emit(isStarted);
    this.startedOrPauseAtEvent.emit(
      !isStarted
        ? "Started at" +
            (new Date().toDateString() + " " + new Date().toLocaleTimeString())
        : "Paused at" +
            (new Date().toDateString() + " " + new Date().toLocaleTimeString())
    );

    if (!isStarted) {
      this.startCountToRecord = this.startCountToRecord + 1;
      this.totalStartedCountEvent.emit(this.startCountToRecord);
    } else {
      this.pausedCountToRecord = this.pausedCountToRecord + 1;
      this.totalpausedCountEvent.emit(this.pausedCountToRecord);
    }

    if (isStarted) element.dataset["isstarted"] = false;
    else element.dataset["isstarted"] = true;
  }
}
