import {Component, OnInit} from '@angular/core';
import {StudentProfileService} from '../../../_areas/public-area/_services/student-profile.service';
import {FamilyMember, StudentProfile} from '../../../_areas/public-area/_entities/student-profile';
import {ProfileLibrary} from '../../../_areas/public-area/_entities/profile-library';
import {ModalDismissReasons, NgbDateAdapter, NgbDateParserFormatter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomParserFormatter} from '../../../_core/dateformat';
import {NgbDateCustomAdapter} from '../../../_core/date-adapter';

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
  loading = true;
  closeResult: string;

  constructor(private profileService: StudentProfileService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.newMember = new FamilyMember();
    this.loading = true;
    this.profileService.getProfileLibrary().subscribe(
      value => {
        this.library = value;
        console.log(this.library);
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
        console.log(value);
      },
      error => {
        console.log(error);
      }
    );
  }
}
