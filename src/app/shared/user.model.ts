export class User {
  public username: string;
  public firstName: string;
  public lastName: string;
  public role: 'admin' | 'user';
  public enabled: boolean;

  constructor(username: string, firstName: string, lastName: string, role: "admin" | "user", enabled: boolean) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.enabled = enabled;
  }
}
