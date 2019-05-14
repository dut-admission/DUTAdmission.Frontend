import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {LoginInfo} from '../_entities/login-info';
import {Token} from '../_entities/token';
import {httpOptions} from '../../../_constants/http-option';
import {ForgetPassword} from '../_entities/forget-password';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(loginInfo: LoginInfo): Observable<Token> {
    return this.http.post<Token>(API_URL.LOGIN, loginInfo, httpOptions);
  }

  getPassword(forgetPassword: ForgetPassword): Observable<any> {
    return this.http.post(API_URL.FORGET_PASSWORD, forgetPassword, httpOptions);
  }
}
