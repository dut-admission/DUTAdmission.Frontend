import {Component, OnInit} from '@angular/core';
import {AccountGroup} from '../../../../_areas/admin-area/_entities/account-group';
import {AccountGroupService} from '../../../../_areas/admin-area/_services/account-group.service';
import {SharedService} from '../../../../_core/shared.service';

@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styleUrls: ['./user-group-list.component.scss']
})
export class UserGroupListComponent implements OnInit {
  groups: AccountGroup[] = [];
  newGroup: AccountGroup;

  constructor(private groupService: AccountGroupService,
              private sharedService: SharedService) {
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
    this.sharedService.openFormModal(content, 'lg');
  }
}
