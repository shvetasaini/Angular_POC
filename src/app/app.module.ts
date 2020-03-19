import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PhotoApiService } from "./services/PhotoApi.service";
import { SharedService } from "./services/SharedService.service";
import { NavModule } from "./nav/nav.module";
import { PipesModule } from "./pipe/pipes.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavModule,
    PipesModule
  ],
  providers: [PhotoApiService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
