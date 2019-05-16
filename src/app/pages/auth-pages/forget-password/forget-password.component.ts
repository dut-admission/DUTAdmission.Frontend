import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../_areas/auth-area/_services/authentication.service';
import {ForgetPassword} from '../../../_areas/auth-area/_entities/forget-password';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword: ForgetPassword;

  constructor(private authenticationService: AuthenticationService,
              private toastr: ToastrService,
              private router: Router) {
    this.forgetPassword = new ForgetPassword();
  }

  ngOnInit() {
  }

  getNewPassword() {
    if (this.isValidated()) {
      this.authenticationService.getPassword(this.forgetPassword).subscribe(
        value => {
          this.toastr.success('Mật khẩu mới của bạn đã được gửi về email của bạn.', 'Lấy mật khẩu mới thành công', {
            timeOut: 4000,
            closeButton: true,
            positionClass: 'toast-top-center',
            enableHtml: true
          });
        },
        error => {
          this.notifyErrorMessage(error['error']['Message']);
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

  notifyErrorMessage(message: string) {
    this.toastr.clear();
    this.toastr.error(`<div class="text-center">${message}</div>`, 'Thông báo', {
      timeOut: 4000,
      closeButton: true,
      positionClass: 'toast-top-center',
      enableHtml: true
    });
  }

  notifyInvalidData() {
    this.toastr.clear();
    if (!this.isValidated()) {
      this.toastr.error(`<span class="now-ui-icons ui-1_bell-53"></span>Username và Email không được bỏ trống!.`, 'Thông báo', {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        positionClass: 'toast-top-center'
      });
    }
  }
}
