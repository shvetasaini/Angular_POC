import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-timer-date-time-record",
  templateUrl: "./timer-date-time-record.component.html",
  styleUrls: ["./timer-date-time-record.component.css"]
})
export class TimerDateTimeRecordComponent implements OnInit {
  @Input() startedOrPausedAt: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
