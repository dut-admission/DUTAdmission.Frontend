import {Injectable} from '@angular/core';
import {Account} from '../_entities/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {
  }

  getAccounts(): Account[] {
    const accounts: Account[] = [];
    for (let index = 0; index < 20; index++) {
      accounts.push(
        {
          AccountGroupId: 1,
          AccountGroupName: 'Phòng công tác sinh viên',
          Email: 'trinhminhan1996@gmail.com',
          FirstName: 'An',
          Id: index,
          IdentityNumber: '102140055',
          LastName: 'Trinh',
          PhoneNumber: '0965665366',
          Username: 'minhanbkdn'
        }
      );
    }
    return accounts;
  }
}
