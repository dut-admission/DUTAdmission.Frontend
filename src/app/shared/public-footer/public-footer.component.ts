import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.scss']
})
export class PublicFooterComponent implements OnInit {
  test: Date = new Date();

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  getPath() {
    return this.router.url;
  }
}
