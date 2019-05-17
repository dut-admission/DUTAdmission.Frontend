import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthenticationService} from '../../../_areas/auth-area/_services/authentication.service';
import {LoginInfo} from '../../../_areas/auth-area/_entities/login-info';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loading = false;
  loginInfo: LoginInfo;
  remembered: boolean;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private toastr: ToastrService) {
  }

  initRememberPassword() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('Password');
    if (username !== null && password !== null) {
      this.loginInfo = new LoginInfo(username, atob(password));
      this.remembered = true;
    } else {
      this.loginInfo = new LoginInfo('', '');
    }
  }

  login(): void {
    if (this.isValidated()) {
      this.loading = true;
      this.authenticationService.login(this.loginInfo).subscribe(
        value => {
          this.loading = false;
          this.saveLoginInfoToLocal();
          this.router.navigate(['/home']);
        },
        error => {
          this.loading = false;
          console.log(error);
          this.notifyErrorMessage(error['error']);
        }
      );
    }
  }

  saveLoginInfoToLocal() {
    if (this.remembered === true) {
      localStorage.setItem('username', this.loginInfo.username);
      localStorage.setItem('Password', btoa(this.loginInfo.Password));
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('Password');
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

  notifyErrorMessage(message: string) {
    this.toastr.clear();
    this.toastr.error(`<div class="text-center">${message}</div>`, 'Thông báo', {
      timeOut: 4000,
      closeButton: true,
      positionClass: 'toast-top-center',
      enableHtml: true
    });
  }

  notifUserNameVaMatKhau() {
    this.toastr.clear();
    if (!this.isValidated()) {
      this.toastr.error(`<span class="now-ui-icons ui-1_bell-53"></span>Username và Password không được bỏ trống!.`, 'Thông báo', {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        positionClass: 'toast-top-center'
      });
    }
  }

  ngOnDestroy() {
  }

}
