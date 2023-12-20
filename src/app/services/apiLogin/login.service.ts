import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  //Servicio para enviar datos de login a orangepill
  getLogin(userName: any, pass: any): Observable<any> {
    const endpoint = `${this.apiUrl}/login?username=${userName}&password=${pass}`;
    return this.http.get<any>(endpoint, { withCredentials: true });

  }
}
