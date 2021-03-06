import {Component, OnInit} from '@angular/core';
import {Permission, Screen} from '../../../_areas/admin-area/_entities/permission';
import {PermissionService} from '../../../_areas/admin-area/_services/permission.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {SharedService} from '../../../_core/shared.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {
  screens: Screen[] = [];

  constructor(private permissionService: PermissionService,
              private sharedService: SharedService,
              ) {
  }

  ngOnInit() {
    this.screens = this.permissionService.getPermissions();
    this.sharedService.notifyError('Tính năng đang phát triển.');
  }

  onPermissionChang(permission: Permission) {
    if (!permission.IsActived && permission.IsToViewIndex) {
      console.log(permission.IsActived);
      this.screens.find(value => {
        return value.Id === permission.ScreenId;
      }).Permissions.map(per => per.IsActived = false);
    } else if (permission.IsActived && !permission.IsToViewIndex) {
      this.screens.find(value => {
        return value.Id === permission.ScreenId;
      }).Permissions.find(per => {
        return per.IsToViewIndex && !per.IsActived;
      }).IsActived = true;
    }
  }
}
