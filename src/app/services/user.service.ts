import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Instructor} from "../models/instructor";
import {User} from "../models/user";
import {RegistrationData, RegistrationResponse} from "../models/register.model";

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

  register(userData: RegistrationData): Observable<RegistrationResponse> {
    const registrationPayload = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      role: userData.role,
      userName: userData.userName,
      phoneNumber: userData.phoneNumber,
      title: userData.title,
      bio: userData.bio,
      website: userData.website,
      facebook: userData.facebook,
      twitter: userData.twitter,
      instagram: userData.instagram,
      linkedin: userData.linkedin,
      youtube: userData.youtube,
      tiktok: userData.tiktok
    };
    
    return this.httpClient.post<RegistrationResponse>(
      environment.baseUrlWs + '/api/users/register',
      registrationPayload
    );
  }
}
