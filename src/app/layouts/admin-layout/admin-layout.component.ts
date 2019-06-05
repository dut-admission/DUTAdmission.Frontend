import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../_core/shared.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  loading: boolean;

  constructor(private router: Router,
              private sharedService: SharedService) {
    this.sharedService.changeEmitted$.subscribe(
      value => {
        this.loading = value;
      }
    );
  }

  ngOnInit() {
  }

}
