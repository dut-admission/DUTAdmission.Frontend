import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthenticationService} from '../../../_areas/auth-area/_services/authentication.service';
import {LoginInfo} from '../../../_areas/auth-area/_entities/login-info';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {SharedService} from '../../../_core/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginInfo: LoginInfo;
  remembered: boolean;
  focus: boolean;
  focus1: boolean;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private sharedService: SharedService) {
  }

  initRememberPassword() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username !== null && password !== null) {
      this.loginInfo = new LoginInfo(username, atob(password));
      this.remembered = true;
    } else {
      this.loginInfo = new LoginInfo('', '');
    }
  }

  login(): void {
    this.sharedService.emitChange(true);
    if (this.isValidated()) {
      this.authenticationService.login(this.loginInfo).subscribe(
        value => {
          this.sharedService.emitChange(false);
          this.saveLoginInfoToLocal();
          if (value['isStudent']) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/user-profile']);
          }
        },
        error => {
          this.sharedService.emitChange(false);
          this.sharedService.notifyError(error['error']);
        }
      );
    }
  }

  saveLoginInfoToLocal() {
    if (this.remembered === true) {
      localStorage.setItem('username', this.loginInfo.username);
      localStorage.setItem('password', btoa(this.loginInfo.Password));
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  }

  ngOnInit() {
    this.initRememberPassword();
  }

  isValidated(): boolean {
    return this.isNotEmptyString(this.loginInfo.username) && this.isNotEmptyString(this.loginInfo.Password);
  }

  private isNotEmptyString(text: String) {
    return text !== undefined && text !== null && text !== '';
  }

  notifUserNameVaMatKhau() {
    if (!this.isValidated()) {
      this.sharedService.notifyError('Username và Password không được bỏ trống!.');
    }
  }

  ngOnDestroy() {
  }

}
