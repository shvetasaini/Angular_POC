import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { Tab1Component } from "./tab1/tab1.component";
import { Tab2Component } from "./tab2/tab2.component";
import { Tab3Component } from "./tab3/tab3.component";
import { PhotoApiService } from "./services/PhotoApi.service";
import { CountDownTimerComponent } from "./count-down-timer/count-down-timer.component";
import { TimerOperationComponent } from "./timer-operation/timer-operation.component";
import { TimerDateTimeRecordComponent } from "./timer-date-time-record/timer-date-time-record.component";
import { TimerActionRecordComponent } from "./timer-action-record/timer-action-record.component";
import { SharedService } from "./services/SharedService.service";
import { SortPipe } from "./pipe/sort-pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    CountDownTimerComponent,
    TimerOperationComponent,
    TimerDateTimeRecordComponent,
    TimerActionRecordComponent,
    SortPipe
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [PhotoApiService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
