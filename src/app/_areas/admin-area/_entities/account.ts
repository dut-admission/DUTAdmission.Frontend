export class Account {
  Id: number;
  Username: string;
  FirstName: string;
  LastName: string;
  IdentityNumber: string;
  Email: string;
  PhoneNumber: string;
  AccountGroupId: number;
  AccountGroupName: string;

  constructor(account: Account) {
    if (account) {
      this.Id = account.Id;
      this.AccountGroupId = account.AccountGroupId;
      this.AccountGroupName = account.AccountGroupName;
      this.Email = account.Email;
      this.FirstName = account.FirstName;
      this.LastName = account.LastName;
      this.PhoneNumber = account.PhoneNumber;
      this.IdentityNumber = account.IdentityNumber;
      this.Username = account.Username;
    } else {
      this.Id = 0;
      this.AccountGroupId = 1;
      this.AccountGroupName = '';
      this.Email = '';
      this.FirstName = '';
      this.LastName = '';
      this.PhoneNumber = '';
      this.IdentityNumber = '';
      this.Username = '';
    }
  }
}
