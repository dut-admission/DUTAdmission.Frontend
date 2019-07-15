import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../_core/shared.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  providers: [SharedService]
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;
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
    var html = document.getElementsByTagName('html')[0];
    html.classList.add('auth-layout');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('bg-default');
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

  }

  ngOnDestroy() {
    var html = document.getElementsByTagName('html')[0];
    html.classList.remove('auth-layout');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('bg-default');
  }

  onLoading(loading: boolean) {
    this.loading = loading;
  }
}
