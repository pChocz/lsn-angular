import {Injectable} from '@angular/core';
import {adjectives, animals, Config, names, starWars, uniqueNamesGenerator} from 'unique-names-generator';
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserGeneratorService {

  usernameGeneratorConfig: Config = {
    dictionaries: [adjectives, animals],
    style: 'lowerCase',
    separator: ' ',
    length: 2,
  }

  nameGeneratorConfig: Config = {
    dictionaries: [names, starWars],
    style: 'capital',
    separator: ' ',
    length: 2,
  }

  constructor() {
  }


  public generateRandomUsers(number: number): User[] {
    let users: User[] = [];
    for (let i = 0; i < number; i++) {
      const username = uniqueNamesGenerator(this.usernameGeneratorConfig);
      const generatee = uniqueNamesGenerator(this.nameGeneratorConfig);
      const firstName = generatee.split(" ")[0];
      const lastName = generatee.split(" ")[1];
      const user = new User(
        username,
        firstName,
        lastName,
        i % 24 === 0 ? 'admin' : 'user',
        i % 3 !== 0
      );
      users.push(user);
    }
    return users;
  }


}
