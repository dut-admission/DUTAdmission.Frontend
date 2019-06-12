export class Status {
  Id: number;
  Name: string;


  constructor(status: Status) {
    if (status) {
      this.Id = status.Id;
      this.Name = status.Name;
    } else {
      this.Id = 0;
      this.Name = '';
    }
  }
}
