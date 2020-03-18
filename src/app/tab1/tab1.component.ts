import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "./tab1.component.html",
  styleUrls: ["./tab1.component.css"]
})
export class Tab1Component implements OnInit {
  timerInputdata: number = 0;
  pauseCountToRecord: number = 0;
  pauseCountToShow: number[] = [];
  counterInterval: any;
  startedOrPausedAt: string[] = [];
  totalStartedCount: number = 0;
  totalPausedCount: number = 0;

  constructor() {}
  ngOnInit(): {};

  receivetimerInputdata(intialTimer) {
    this.timerInputdata = intialTimer;
  }

  receiveStartPauseEevent(isStarted) {
    if (!isStarted) {
      this.counterInterval = setInterval(() => {
        this.pauseCountToRecord = this.timerInputdata - 1;
        this.timerInputdata--;
      }, 1000);
    } else {
      clearInterval(this.counterInterval);
      this.pauseCountToShow.push(this.pauseCountToRecord);
    }
  }

  recieveStartedOrPauseAtEvent(startedOrPausedAt) {
    this.startedOrPausedAt.push(startedOrPausedAt);
    console.log(this.startedOrPausedAt);
  }
  recieveTotalStartedCountEvent(count) {
    this.totalStartedCount = count;
  }

  recieveTotalPausedCountEvent(count) {
    this.totalPausedCount = count;
  }
}
