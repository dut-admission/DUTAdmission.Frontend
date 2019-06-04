export class TuitionType {
  Id: number;
  Name: string;
  Money: number;
  Description: string;
}

export class Tuition {
  TuitionTypes: TuitionType[];
  TuitionFee: number;
  TotalOfFee: number;
}
