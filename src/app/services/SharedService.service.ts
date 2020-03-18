import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedService {
  private timerLimit = new BehaviorSubject<number>(10000);
  currentData = this.timerLimit.asObservable();

  constructor() {}

  changeData(timerInputData: number) {
    this.timerLimit.next(timerInputData);
  }

  onClickStart(timerInputData: number) {
    alert(timerInputData);
  }
}
