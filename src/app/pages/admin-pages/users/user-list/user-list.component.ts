import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../_areas/admin-area/_entities/account';
import {AccountService} from '../../../../_areas/admin-area/_services/account.service';
import {SharedService} from '../../../../_core/shared.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  accounts: Account[] = [];
  newAccount: Account;

  constructor(private acoountService: AccountService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.accounts = this.acoountService.getAccounts();
  }

  deleteAccount(account) {
  }

  openModalDetail(content, account) {
    if (account) {
      this.newAccount = new Account(account);
    } else {
      this.newAccount = new Account(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  resetPassword(account: Account) {
  }
}
