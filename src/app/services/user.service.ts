import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Instructor} from "../models/instructor";
import {User} from "../models/user";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(userId: string): Observable<Instructor> {
    return this.httpClient.get<User>(environment.baseUrlWs + '/api/users/' + userId);
  }

  getUsersList() {
    return this.httpClient.get<User[]>(environment.baseUrlWs + '/api/users');
  }

  getInstructorsList() {
    return this.httpClient.get<User[]>(environment.baseUrlWs + '/api/instructors');
  }
}
