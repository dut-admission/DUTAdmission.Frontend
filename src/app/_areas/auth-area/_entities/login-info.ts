export class LoginInfo {
  UserName: string;
  Password: string;

  constructor(username: string, password: string) {
    this.Password = password;
    this.UserName = username;
  }
}
