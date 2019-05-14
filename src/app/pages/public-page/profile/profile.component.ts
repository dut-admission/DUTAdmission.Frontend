import {Component, OnInit} from '@angular/core';
import {StudentProfileService} from '../../../_areas/public-area/_services/student-profile.service';
import {StudentProfile} from '../../../_areas/public-area/_entities/student-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  profile: StudentProfile;
  loading = true;

  constructor(private profileService: StudentProfileService) {
  }

  ngOnInit() {
    this.loading = true;
    this.profileService.getStudentProfile().subscribe(
      value => {
        this.loading = false;
        this.profile = value;
        console.log(value);
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }

}
