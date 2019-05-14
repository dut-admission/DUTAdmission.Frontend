import {Component, OnInit} from '@angular/core';
import {StudentProfileService} from '../../../_areas/public-area/_services/student-profile.service';
import {StudentProfile} from '../../../_areas/public-area/_entities/student-profile';
import {ProfileLibrary} from '../../../_areas/public-area/_entities/profile-library';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  profile: StudentProfile;
  library: ProfileLibrary;
  loading = true;

  constructor(private profileService: StudentProfileService) {
  }

  ngOnInit() {
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

}
