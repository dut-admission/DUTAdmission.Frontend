import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {API_URL} from '../../../_constants/api-url';
import {LoginInfo} from '../_entities/login-info';
import {httpOptions} from '../../../_constants/http-option';
import {ForgetPassword} from '../_entities/forget-password';
import {User} from '../_entities/user';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient,
              private router: Router,
              ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(loginInfo: LoginInfo): Observable<User> {
    return this.http.post<User>(API_URL.LOGIN, loginInfo, httpOptions)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getPassword(forgetPassword: ForgetPassword): Observable<any> {
    return this.http.post(API_URL.FORGET_PASSWORD, forgetPassword, httpOptions);
  }
}
