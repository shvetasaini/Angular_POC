import { Component, OnInit } from "@angular/core";
import { PhotoApiService } from "../../services/PhotoApi.service";

@Component({
  selector: "app-tab3",
  templateUrl: "./tab3.component.html",
  styleUrls: ["./tab3.component.css"]
})
export class Tab3Component implements OnInit {
  productValue: string = "Name";
  public products: any;
  constructor(private _photoApiService: PhotoApiService) {}

  ngOnInit() {
    this._photoApiService.getPhotos().subscribe(response => {
      this.products = response.value;
    });
  }
}
