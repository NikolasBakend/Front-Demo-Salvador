import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDropDownService {
  private apiUrl = environment.apiEndpoint;
  constructor(private http: HttpClient) { }

  // Método para obtener datos de los tiposde monedas
  getCurencies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/currencies`);
  }

  // Método para obtener datos de códigos de países de la API
  getCountryCodes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/international-codes`);
  }

  // Método para obtener datos de la lista de tipos de documentos
  getDocumentsType(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/document-types`);
  }

}
