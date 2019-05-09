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
  constructor(private profileService: StudentProfileService) {
  }

  ngOnInit() {
    this.profileService.getStudentProfile().subscribe(
      value => {
        console.log(value);
      },
      error => console.log(error)
    );
  }

}
