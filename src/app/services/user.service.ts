import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Instructor} from "../models/instructor";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(instructorId: string): Observable<Instructor> {
    return this.httpClient.get<Instructor>(environment.baseUrlWs + '/api/users/' + instructorId);
  }

  getUsersList() {
    return this.httpClient.get<Instructor[]>(environment.baseUrlWs + '/api/users');
  }
}
