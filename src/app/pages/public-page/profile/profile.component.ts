import {Component, OnInit} from '@angular/core';
import {StudentProfileService} from '../../../_areas/public-area/_services/student-profile.service';
import {Achievement, FamilyMember, HighSchoolResult, StudentProfile} from '../../../_areas/public-area/_entities/student-profile';
import {ProfileLibrary} from '../../../_areas/public-area/_entities/profile-library';
import {NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomParserFormatter} from '../../../_core/dateformat';
import {NgbDateCustomAdapter} from '../../../_core/date-adapter';
import {SharedService} from '../../../_core/shared.service';

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

  constructor(private profileService: StudentProfileService,
              private sharedService: SharedService) {
    this.sharedService.emitChange(true);
    this.newMember = new FamilyMember();
    this.newAchievement = new Achievement();
    this.newLearningResult = new HighSchoolResult();
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
    console.log(this.profile);
  }

  open(content, type, modalDimension, object) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.sharedService.openFormModal(content, 'sm');
    } else if (modalDimension === '' && type === 'Notification') {
      this.sharedService.openFormModal(content, 'sm');
    } else {
      if (object !== this.newMember) {
        this.newMember = object;
      } else {
        this.newMember = new FamilyMember();
      }
      this.sharedService.openFormModal(content, 'lg');
    }
  }

  saveFamilyMember() {
    this.sharedService.emitChange(true);
    this.profileService.saveFamilyMemeber(this.newMember).subscribe(
      value => {
        this.sharedService.emitChange(false);
        this.sharedService.dismissAll();
        this.sharedService.notifySuccess('Lưu thông tin thành viên thành công.');
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
      this.newMember = member;
    } else {
      this.newMember = new FamilyMember();
    }
    this.sharedService.openFormModal(content, 'lg');
  }

  openModalForNewResult(content, result) {
    if (result) {
      this.newLearningResult = result;
    } else {
      this.newLearningResult = new HighSchoolResult();
    }
    this.sharedService.openFormModal(content, 'lg');
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
}
