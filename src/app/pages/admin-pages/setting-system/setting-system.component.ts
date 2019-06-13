import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../_core/shared.service';
import {SettingService} from '../../../_areas/admin-area/_services/setting.service';
import {University} from '../../../_areas/admin-area/_entities/University';

@Component({
  selector: 'app-setting-system',
  templateUrl: './setting-system.component.html',
  styleUrls: ['./setting-system.component.scss']
})
export class SettingSystemComponent implements OnInit {

  settingSystem: University = new University(null);
  constructor(private settingService: SettingService, private sharedService: SharedService) { }

  ngOnInit() {
    this.settingService.getSettingSystem().subscribe(
      result => {
        this.settingSystem = result[0];

      },
      error1 => {
        this.sharedService.notifyError('Có vấn đề xảy ra. Vui lòng thử lại sau.');
      }
    );
  }

}
