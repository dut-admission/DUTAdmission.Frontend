import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../_areas/auth-area/_services/authentication.service';
import {ForgetPassword} from '../../../_areas/auth-area/_entities/forget-password';
import {SharedService} from '../../../_core/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword: ForgetPassword;

  constructor(private authenticationService: AuthenticationService,
              private sharedService: SharedService) {
    this.forgetPassword = new ForgetPassword();
  }

  ngOnInit() {
  }

  getNewPassword() {
    if (this.isValidated()) {
      this.sharedService.emitChange(true);
      this.authenticationService.getPassword(this.forgetPassword).subscribe(
        value => {
          this.sharedService.emitChange(false);
          this.sharedService.notifySuccess('Mật khẩu mới của bạn đã được gửi về email của bạn.');
        },
        error => {
          this.sharedService.emitChange(false);
          this.sharedService.notifyError(error['error']);
        }
      );
    }
  }

  isValidated() {
    return this.isNotEmptyString(this.forgetPassword.UserName) && this.isNotEmptyString(this.forgetPassword.Email);
  }

  private isNotEmptyString(text: String) {
    return text !== undefined && text !== null && text !== '';
  }

  notifyInvalidData() {
    if (!this.isValidated()) {
      this.sharedService.notifyError('Username và Email không được bỏ trống!.');
    }
  }
}
