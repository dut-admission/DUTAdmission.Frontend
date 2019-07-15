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
    accounts.push(
      {
        AccountGroupId: 1,
        AccountGroupName: 'Phòng công tác sinh viên',
        Email: 'trinhminhan1996@gmail.com',
        FirstName: 'An',
        Id: 1,
        IdentityNumber: '102140055',
        LastName: 'Trinh',
        PhoneNumber: '0965665366',
        Username: 'minhanctsv'
      }
    );
    accounts.push(
      {
        AccountGroupId: 2,
        AccountGroupName: 'Phòng công tác tổ chức hành chính',
        Email: 'trinhminhan1996@gmail.com',
        FirstName: 'An',
        Id: 1,
        IdentityNumber: '102140055',
        LastName: 'Trinh',
        PhoneNumber: '0965665366',
        Username: 'minhantchc'
      }
    );
    accounts.push(
      {
        AccountGroupId: 3,
        AccountGroupName: 'Phòng đào tạo',
        Email: 'trinhminhan1996@gmail.com',
        FirstName: 'An',
        Id: 1,
        IdentityNumber: '102140055',
        LastName: 'Trinh',
        PhoneNumber: '0965665366',
        Username: 'minhandt'
      }
    );

    return accounts;
  }
}
