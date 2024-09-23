import { Injectable } from '@angular/core';
import { formBody } from './auth.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  register(formBody: formBody) {
    return this.http.post<any>(
      environment.apiUrl + '/user/createUser',
      formBody
    );
  }

  login(formBody: formBody) {
    return this.http.post<any>(environment.apiUrl + '/user/login', formBody);
  }

  checkToken(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(
      `${environment.apiUrl}/user/checkToken`,
      {},
      { headers }
    );
  }
}
