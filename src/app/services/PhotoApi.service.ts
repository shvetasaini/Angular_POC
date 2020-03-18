import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PhotoApiService {
  constructor(private httpclient: HttpClient) {}

  getPhotos(): Observable<any> {
    return this.httpclient.get(
      "https://services.odata.org/northwind/northwind.svc/Products"
    );
  }
}
