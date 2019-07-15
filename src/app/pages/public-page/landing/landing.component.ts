import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../_areas/auth-area/_services/authentication.service';
import {User} from '../../../_areas/auth-area/_entities/user';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  public currentUserValue: User;

  constructor(private authenticationService: AuthenticationService) {
    this.currentUserValue = authenticationService.currentUserValue;
  }

  ngOnInit() {}

}
