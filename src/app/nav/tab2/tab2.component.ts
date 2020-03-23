import { Component, OnInit } from "@angular/core";
import { faSort } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-tab2",
  templateUrl: "./tab2.component.html",
  styleUrls: ["./tab2.component.css"]
})
export class Tab2Component implements OnInit {
  faSort = faSort;
  columnToSort: string = "Name";
  IsDesc: boolean = false;
  data: any[] = [
    {
      Name: "Nagendra",
      Class: 3,
      Section: "D",
      Sub1: 48,
      Sub2: 65,
      Sub3: 89
    },
    {
      Name: "Rahul",
      Class: 2,
      Section: "E",
      Sub1: 87,
      Sub2: 28,
      Sub3: 56
    },
    {
      Name: "Meghna",
      Class: 4,
      Section: "D",
      Sub1: 46,
      Sub2: 70,
      Sub3: 29
    },
    {
      Name: "Deepak",
      Class: 1,
      Section: "A",
      Sub1: 40,
      Sub2: 46,
      Sub3: 20
    },
    {
      Name: "Gaurav",
      Class: 5,
      Section: "B",
      Sub1: 81,
      Sub2: 62,
      Sub3: 71
    }
  ];
  keys: any[];

  constructor() {
    // console.log(Object.keys(this.data[0]));
    this.keys = Object.keys(this.data[0]);
  }

  clickDecsIcon(event, column) {
    var target = event.currentTarget;
    var IsDesc = JSON.parse(target.dataset["isdesc"]);

    this.columnToSort = column;
    this.IsDesc = IsDesc;

    if (IsDesc === false) {
      target.dataset["isdesc"] = true;
    }
    if (IsDesc === true) {
      target.dataset["isdesc"] = false;
    }
  }

  ngOnInit(): void {}
}
