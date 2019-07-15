export class AccountGroup {
  Id: number;
  Name: string;
  Description: string;

  constructor(group: AccountGroup) {
    if (group) {
      this.Id = group.Id;
      this.Name = group.Name;
      this.Description = group.Description;
    } else {
      this.Id = 0;
      this.Name = '';
      this.Description = '';
    }
  }
}
