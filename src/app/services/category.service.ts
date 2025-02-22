import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Category} from "../models/category";

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.httpClient.get<Category>(environment.baseUrlWs + '/api/categories/' + categoryId);
  }

  getCategoriesList() {
    return this.httpClient.get<Category[]>(environment.baseUrlWs + '/api/categories');
  }
}
