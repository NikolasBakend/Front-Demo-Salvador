import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private apiUrl = environment.apiEndpoint;
  constructor(private http: HttpClient) { }

  // Método para verificar la subida de archivos a google drive
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/upload`);
  }

}
