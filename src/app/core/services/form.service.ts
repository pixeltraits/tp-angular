import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Form } from '../models/form';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) {
  }

  getForm(): Observable<Form> {
    const url = `${environment.API_URL}/form`;
    return this.http.get<Form>(url);
  }

  addForm(form: Form): Observable<any> {
    const url = `${environment.API_URL}/form`;
    return this.http.post(url, form);
  }
}
