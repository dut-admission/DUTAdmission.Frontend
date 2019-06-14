import {Component, OnInit} from '@angular/core';
import {EmployeeProfile} from '../../../_areas/admin-area/_entities/employee-profile';
import {EmployeeProfileService} from '../../../_areas/admin-area/_services/employee-profile.service';
import {NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomAdapter} from '../../../_core/date-adapter';
import {NgbDateCustomParserFormatter} from '../../../_core/dateformat';
import {SharedService} from '../../../_core/shared.service';
import {Password} from '../../../_areas/public-area/_entities/password';
import {StudentProfileService} from '../../../_areas/public-area/_services/student-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateCustomAdapter},
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}]
})
export class UserProfileComponent implements OnInit {
  profile: EmployeeProfile;
  password: Password;

  constructor(private employeeProfile: EmployeeProfileService,
              private sharedService: SharedService,
              private profileService: StudentProfileService,
  ) {
    this.profile = new EmployeeProfile();
    this.password = new Password();
  }

  ngOnInit() {
    this.sharedService.emitChange(true);
    this.employeeProfile.getEmployeeProfile().subscribe(value => {
        this.profile = value;
        this.sharedService.emitChange(false);
      },
      error => {
        this.sharedService.emitChange(false);
      });
  }

  SaveProfile() {
    this.sharedService.emitChange(true);
    this.employeeProfile.saveEmployeeProfile(this.profile).subscribe(value => {
        this.sharedService.emitChange(false);
        this.sharedService.notifySuccess('Cập nhật thông tin tài khoản thành công.');
      },
      error1 => {
        this.sharedService.emitChange(false);
        this.sharedService.notifyError('Cập nhật thông tin tài khoản không thành công.');
      });
  }

  changePassword() {
    if (this.password.new_password !== this.password.renew_password) {
      this.sharedService.notifyError('Nhập lại mật khẩu không trùng khớp.');
    } else {
      this.profileService.changePassword(this.password).subscribe(
        value => {
          this.sharedService.notifySuccess('Đổi mật khẩu thành công.');
          this.sharedService.dismissAll();
        },
        error => {
          this.sharedService.notifyError('Mật khẩu cũ không chính xác.');
        }
      );
    }
  }

  openModalChangePassword(content) {
    this.password = new Password();
    this.sharedService.openFormModal(content, 'sm');
  }
}
