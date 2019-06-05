export class TuitionType {
  Id: number;
  Money: number;
  Name: string;
  Description: string;
  LearningYear: number;

  constructor(tuitionType: TuitionType) {
    if (tuitionType) {
      this.Id = tuitionType.Id;
      this.Money = tuitionType.Money;
      this.Name = tuitionType.Name;
      this.Description = tuitionType.Description;
    } else {
      this.Id = 0;
      this.Money = 0;
      this.Name = '';
      this.Description = '';
    }
  }
}
