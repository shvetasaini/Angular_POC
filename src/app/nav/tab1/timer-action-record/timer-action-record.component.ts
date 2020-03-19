import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-timer-action-record",
  templateUrl: "./timer-action-record.component.html",
  styleUrls: ["./timer-action-record.component.css"]
})
export class TimerActionRecordComponent implements OnInit {
  @Input() totalStartedCount: number;
  @Input() totalPausedCount: number;

  constructor() {}

  ngOnInit(): void {}
}
