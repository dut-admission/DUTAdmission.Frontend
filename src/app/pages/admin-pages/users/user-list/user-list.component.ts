import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../_areas/admin-area/_entities/account';
import {AccountService} from '../../../../_areas/admin-area/_services/account.service';
import {BasicStudent} from '../../../../_areas/admin-area/_entities/basic-student';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  accounts: Account[] = [];
  newAccount: Account;
  closeResult = '';

  constructor(private acoountService: AccountService,
              private modalService: NgbModal) {
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
    this.modalService.open(content, {windowClass: '', size: 'lg', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  resetPassword(account: Account) {
    
  }
}
