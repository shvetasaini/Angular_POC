import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavRoutingModule } from "./nav-routing.module";
import { Tab1Component } from "./tab1/tab1.component";
import { Tab2Component } from "./tab2/tab2.component";
import { Tab3Component } from "./tab3/tab3.component";
import { TimerOperationComponent } from "./tab1/timer-operation/timer-operation.component";
import { TimerDateTimeRecordComponent } from "./tab1/timer-date-time-record/timer-date-time-record.component";
import { TimerActionRecordComponent } from "./tab1/timer-action-record/timer-action-record.component";
import { CountDownTimerComponent } from "./tab1/count-down-timer/count-down-timer.component";
import { NavComponent } from "./nav.component";
import { FormsModule } from "@angular/forms";
import { PipesModule } from "../pipe/pipes.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    NavComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    CountDownTimerComponent,
    TimerOperationComponent,
    TimerDateTimeRecordComponent,
    TimerActionRecordComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
    FormsModule,
    PipesModule,
    FontAwesomeModule
  ],
  exports: [NavComponent]
})
export class NavModule {}
