import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Tab1Component } from "./tab1/tab1.component";
import { Tab2Component } from "./tab2/tab2.component";
import { Tab3Component } from "./tab3/tab3.component";

const routes: Routes = [
  { path: "Countdown-Timer", component: Tab1Component },
  { path: "Floating-Banner", component: Tab2Component },
  { path: "Product-List", component: Tab3Component },
  { path: "*", component: Tab1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
