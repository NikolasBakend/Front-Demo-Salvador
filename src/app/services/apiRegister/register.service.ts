import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = environment.apiEndpoint;
  constructor(private http: HttpClient) { }

  //api para registro de usuario
  postDataUserRegister(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register-users`, data, { responseType: 'text' });
  }

}
