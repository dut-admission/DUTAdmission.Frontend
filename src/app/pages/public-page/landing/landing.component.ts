import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../_areas/auth-area/_services/authentication.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {}

}
