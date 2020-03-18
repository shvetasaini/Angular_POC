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

  transform(data: any[], attrName: string) {
    if (!data || !data.length || !attrName) return data;
    let comparer = this.getComparer(attrName);
    data.sort(comparer);
    return data;
  }
}
