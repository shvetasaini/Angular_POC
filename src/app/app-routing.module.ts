import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavModule } from "./nav/nav.module";

const routes: Routes = [
  {
    path: "nav",
    loadChildren: "../app/nav/nav.module#NavModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
