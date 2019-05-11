import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {LoginInfo} from '../_entities/login-info';
import {Token} from '../_entities/token';
import {httpOptions} from '../../../_constants/http-option';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(loginInfo: LoginInfo): Observable<Token> {
    console.log(loginInfo);
    return this.http.post<Token>(API_URL.LOGIN, loginInfo, httpOptions);
  }
}
