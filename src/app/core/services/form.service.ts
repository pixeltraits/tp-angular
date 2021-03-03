import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from 'src/environments/environment';

import { Form } from '@models/form';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Form> {
    const url = `${API_URL}/form`;
    return this.http.get<Form>(url);
  }
}
