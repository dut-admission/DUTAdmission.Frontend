import {Component, OnInit} from '@angular/core';
import {StudentProfileService} from '../../../_areas/public-area/_services/student-profile.service';
import {Achievement, FamilyMember, HighSchoolResult, StudentProfile} from '../../../_areas/public-area/_entities/student-profile';
import {ProfileLibrary} from '../../../_areas/public-area/_entities/profile-library';
import {NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomParserFormatter} from '../../../_core/dateformat';
import {NgbDateCustomAdapter} from '../../../_core/date-adapter';
import {SharedService} from '../../../_core/shared.service';
import {Password} from '../../../_areas/public-area/_entities/password';
import {DeleteObject} from '../../../_areas/public-area/_entities/delete-object';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateCustomAdapter},
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}]
})

export class ProfileComponent implements OnInit {
  profile: StudentProfile;
  library: ProfileLibrary;
  newMember: FamilyMember;
  newLearningResult: HighSchoolResult;
  newAchievement: Achievement;
  password: Password;

  constructor(private profileService: StudentProfileService,
              private sharedService: SharedService) {
    this.sharedService.emitChange(true);
    this.newMember = new FamilyMember(null);
    this.newAchievement = new Achievement();
    this.newLearningResult = new HighSchoolResult(null);
    this.password = new Password();
  }

  ngOnInit() {
    this.profileService.getProfileLibrary().subscribe(
      value => {
        this.library = value;
      },
      error => {
        this.sharedService.notifyError(error['error']);
      }
    );
    this.profileService.getStudentProfile().subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.profile = value;
      },
      error => {
        this.sharedService.emitChange(false);
        this.sharedService.notifyError(error['error']);
      }
    );
  }

  SaveProfile() {
    this.sharedService.emitChange(true);
    this.profileService.saveProfile(this.profile).subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.sharedService.notifySuccess('Cập nhật thông tin thành công.');
      },
      error => {
        this.sharedService.emitChange(false);
        this.sharedService.notifyError(error.toString());
      }
    );
  }

  saveFamilyMember() {
    this.sharedService.emitChange(true);
    this.profileService.saveFamilyMemeber(this.newMember).subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.sharedService.dismissAll();
        this.sharedService.notifySuccess('Lưu thông tin thành viên thành công.');
        if (this.newMember.Id === 0) {
          this.profile.FamilyMembers.push(this.newMember);
        } else {
          const index = this.profile.FamilyMembers.findIndex(member => member.Id === this.newMember.Id);
          this.profile.FamilyMembers[index] = new FamilyMember(this.newMember);
        }
      },
      error => {
        this.sharedService.emitChange(false);
        if (error.status === 400) {
          this.sharedService.notifyError('Bad request');
        } else {
          this.sharedService.notifyError('Hệ thống có vấn đề. Vui lòng thử lại sau.');
        }
      }
    );
  }

  saveLearningResult() {
    this.sharedService.emitChange(true);
    this.profileService.saveLearningResult(this.newLearningResult).subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.sharedService.dismissAll();
        this.sharedService.notifySuccess('Lưu thông tin học lực thành công.');
        if (this.newLearningResult.Id === 0) {
          this.profile.HightSchoolInfo.HighSchoolResults.push(value);
        } else {
          const index = this.profile.HightSchoolInfo.HighSchoolResults.findIndex(member => member.Id === this.newLearningResult.Id);
          this.profile.HightSchoolInfo.HighSchoolResults[index] = value;
        }
      },
      error => {
        this.sharedService.emitChange(false);
        this.sharedService.notifyError('error');
      }
    );
  }

  saveAchievement() {
    this.sharedService.emitChange(true);
    this.profileService.saveAchievement(this.newAchievement).subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.sharedService.dismissAll();
        this.sharedService.notifySuccess('Lưu thông tin thành tựu thành công.');
      },
      error => {
        this.sharedService.emitChange(false);
        this.sharedService.notifyError('error');
      }
    );
  }

  openModalForNewMember(content, member) {
    if (member) {
      this.newMember = new FamilyMember(member);
    } else {
      this.newMember = new FamilyMember(null);
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  openModalForNewResult(content, result) {
    if (result) {
      this.newLearningResult = new HighSchoolResult(result);
    } else {
      this.newLearningResult = new HighSchoolResult(null);
    }
    this.sharedService.openFormModal(content, 'sm');
  }

  openModalForNewAchievement(content, achievement) {
    if (achievement) {
      this.newAchievement = achievement;
      console.log(achievement);
    } else {
      this.newAchievement = new Achievement();
    }
    this.sharedService.openFormModal(content, 'sm');
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

  deleteFamilyMember(id: number) {
    const object = new DeleteObject(id, 1);
    this.profileService.deleteObject(object).subscribe(
      value => {
        this.profile.FamilyMembers = this.profile.FamilyMembers.filter(x => x.Id !== id);
        this.sharedService.notifySuccess('Đã xóa thành công.');
      },
      error => {
        this.sharedService.notifyError('Xóa ko thành công.');
      }
    );
  }

  deleteHighSchoolResult(id: number) {
    const object = new DeleteObject(id, 2);
    this.profileService.deleteObject(object).subscribe(
      value => {
        this.profile.HightSchoolInfo.HighSchoolResults = this.profile.HightSchoolInfo.HighSchoolResults.filter(x => x.Id !== id);
        this.sharedService.notifySuccess('Đã xóa thành công.');
      },
      error => {
        this.sharedService.notifyError('Xóa ko thành công.');
      }
    );
  }
  deleteAchievement(id: number) {
    const object = new DeleteObject(id, 0);
    this.profileService.deleteObject(object).subscribe(
      value => {
        this.profile.HightSchoolInfo.Achievements = this.profile.HightSchoolInfo.Achievements.filter(x => x.Id !== id);
        this.sharedService.notifySuccess('Đã xóa thành công.');
      },
      error => {
        this.sharedService.notifyError('Xóa ko thành công.');
      }
    );
  }

}
