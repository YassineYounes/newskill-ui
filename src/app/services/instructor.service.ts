import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Instructor} from "../models/instructor";

@Injectable()
export class InstructorService {

  constructor(private httpClient: HttpClient) {
  }

  getInstructor(instructorId: string): Observable<Instructor> {
    return this.httpClient.get<Instructor>(environment.baseUrlWs + '/api/instructors/' + instructorId);
  }

  getInstructorsList() {
    return this.httpClient.get<Instructor[]>(environment.baseUrlWs + '/api/instructors');
  }

  getActiveInstructorsList() {
    return this.httpClient.get<Instructor[]>(environment.baseUrlWs + '/api/instructors/active');
  }
}
