export class Paging {
  CurrentPage: number;
  TotalPages: number;
  PageSize: number;
  TotalRecord: number;

  constructor() {
    this.CurrentPage = 1;
    this.PageSize = 10;
    this.TotalPages = 1;
    this.TotalRecord = 1;
  }
}
