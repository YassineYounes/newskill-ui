import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Course} from "../models/course";

@Injectable()
export class CourseService {

  constructor(private httpClient: HttpClient) {
  }

  getCourse(courseId: string): Observable<Course> {
    return this.httpClient.get<Course>(environment.baseUrlWs + '/api/courses/' + courseId);
  }

  getCourseList() {
    return this.httpClient.get<Course[]>(environment.baseUrlWs + '/api/courses');
  }
}
