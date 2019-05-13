import {Component, OnInit, OnDestroy} from '@angular/core';
import {LoginService} from '../../../_areas/auth-area/_services/login.service';
import {LoginInfo} from '../../../_areas/auth-area/_entities/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginInfo: LoginInfo;

  constructor(private loginService: LoginService) {
    this.loginInfo = new LoginInfo();
  }

  login(): void {
    this.loginService.login(this.loginInfo).subscribe(
      value => {
        console.log(value);
      },
      error => alert(error)
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
