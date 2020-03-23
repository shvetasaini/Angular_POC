import { Pipe, PipeTransform } from "@angular/core";

interface Comparer {
  (p1: any, p2: any): number;
}

@Pipe({
  name: "sort",
  pure: true
})
export class SortPipe implements PipeTransform {
  private getComparer(attrName): Comparer {
    return function compareByStatus(p1: any, p2: any): number {
      if (p1[attrName] < p2[attrName]) return -1;
      if (p1[attrName] > p2[attrName]) return 1;
      return 0;
    };
  }

  private getDescComparer(comparer): Comparer {
    return function(p1: any, p2: any): number {
      return comparer(p1, p2) * -1;
    };
  }

  transform(data: any[], attrName: string, isDesc: boolean = false) {
    let comparer = this.getComparer(attrName);
    if (isDesc) {
      comparer = this.getDescComparer(comparer);
    }
    data.sort(comparer);
    return data;
  }
}
