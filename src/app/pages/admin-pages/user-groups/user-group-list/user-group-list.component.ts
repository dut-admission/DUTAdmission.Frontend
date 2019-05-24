import {Component, OnInit} from '@angular/core';
import {AccountGroup} from '../../../../_areas/admin-area/_entities/account-group';
import {AccountGroupService} from '../../../../_areas/admin-area/_services/account-group.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styleUrls: ['./user-group-list.component.scss']
})
export class UserGroupListComponent implements OnInit {
  groups: AccountGroup[] = [];
  newGroup: AccountGroup;
  private closeResult: string;

  constructor(private groupService: AccountGroupService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.groups = this.groupService.getGroups();
  }

  openModalDetail(content, group) {
    if (group) {
      this.newGroup = new AccountGroup(group);
    } else {
      this.newGroup = new AccountGroup(null);
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
}
