import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../_core/shared.service';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {
  loading: boolean;
  constructor(private sharedService: SharedService) {
    this.sharedService.changeEmitted$.subscribe(
      value => {
        this.loading = value;
      }
    );
  }

  ngOnInit() {
  }

}
