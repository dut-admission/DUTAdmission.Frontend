import {Component, OnInit} from '@angular/core';
import {StudentProfileService} from '../../../_areas/public-area/_services/student-profile.service';
import {Achievement, FamilyMember, HighSchoolResult, StudentProfile} from '../../../_areas/public-area/_entities/student-profile';
import {ProfileLibrary} from '../../../_areas/public-area/_entities/profile-library';
import {ModalDismissReasons, NgbDateAdapter, NgbDateParserFormatter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomParserFormatter} from '../../../_core/dateformat';
import {NgbDateCustomAdapter} from '../../../_core/date-adapter';
import {ToastrService} from 'ngx-toastr';

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
  loading = true;
  closeResult: string;

  constructor(private profileService: StudentProfileService,
              private modalService: NgbModal,
              private toastr: ToastrService) {
    this.newMember = new FamilyMember();
    this.newAchievement = new Achievement();
    this.newLearningResult = new HighSchoolResult();
  }

  ngOnInit() {
    this.loading = true;
    this.profileService.getProfileLibrary().subscribe(
      value => {
        this.library = value;
      },
      error => {
      }
    );
    this.profileService.getStudentProfile().subscribe(
      value => {
        this.loading = false;
        this.profile = value;
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  SaveProfile() {
    console.log(this.profile);
  }

  open(content, type, modalDimension, object) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, {windowClass: 'modal-mini', size: 'sm', centered: true}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, {windowClass: 'modal-danger', centered: true}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      console.log((object instanceof FamilyMember));
      if (object !== this.newMember) {
        this.newMember = object;
      } else {
        this.newMember = new FamilyMember();
      }
      this.modalService.open(content, {windowClass: '', size: 'lg', centered: true}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
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


  saveFamilyMember() {
    this.profileService.saveFamilyMemeber(this.newMember).subscribe(
      value => {
        this.modalService.dismissAll();
        this.toastr.success('Lưu thông tin thành viên thành công.');
        console.log(value);
      },
      error => {
        if (error.status === 400) {
          this.toastr.error('Bad request');
          console.log(error);
        } else {
          this.toastr.error('Hệ thống có vấn đề. Vui lòng thử lại sau.');
        }
      }
    );
  }

  saveLearningResult() {
    this.profileService.saveLearningResult(this.newLearningResult).subscribe(
      value => {
        this.modalService.dismissAll();
        this.toastr.success('Lưu thông tin học lực thành công.');
        console.log(value);
      },
      error => {
        this.toastr.error('error');
        console.log(error);
      }
    );
  }

  saveAchievement() {
    this.profileService.saveAchievement(this.newAchievement).subscribe(
      value => {
        this.modalService.dismissAll();
        this.toastr.success('Lưu thông tin thành tựu thành công.');
        console.log(value);
      },
      error => {
        this.toastr.error('error');
        console.log(error);
      }
    );
  }

  openModalForNewMember(content, member) {
    if (member) {
      this.newMember = member;
      console.log(member);
    } else {
      this.newMember = new FamilyMember();
    }
    this.modalService.open(content, {windowClass: '', size: 'lg', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openModalForNewResult(content, result) {
    if (result) {
      this.newLearningResult = result;
      console.log(this.newLearningResult);
    } else {
      this.newLearningResult = new HighSchoolResult();
    }
    this.modalService.open(content, {windowClass: '', size: 'sm', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openModalForNewAchievement(content, achievement) {
    if (achievement) {
      this.newAchievement = achievement;
      console.log(achievement);
    } else {
      this.newAchievement = new Achievement();
    }
    this.modalService.open(content, {windowClass: '', size: 'sm', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
