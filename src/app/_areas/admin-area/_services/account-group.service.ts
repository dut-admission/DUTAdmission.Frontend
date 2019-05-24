import {Injectable} from '@angular/core';
import {AccountGroup} from '../_entities/account-group';

@Injectable({
  providedIn: 'root'
})
export class AccountGroupService {

  constructor() {
  }

  getGroups(): AccountGroup[] {
    const groups: AccountGroup[] = [];
    for (let index = 0; index < 5; index++) {
      groups.push(
        {Id: index, Name: `Nhóm tài khoản ${index}`, Description: `Mô tả nhóm tài khoản ${index}`}
      );
    }
    return groups;
  }
}
