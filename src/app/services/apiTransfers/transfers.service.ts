import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {
  private baseUrl = environment.apiEndpoint;
  constructor(private http: HttpClient) { }

  // Método para obtener datos de transaciones
  getTransactions(): Observable<any> {
    const url = `${this.baseUrl}/get-deposits`;
    return this.http.get(url, { withCredentials: true });
  }

  // Método para obtener datos de retiros
  getWithdrawals(): Observable<any> {
    const url = `${this.baseUrl}/get-withdrawals`;
    return this.http.get(url, { withCredentials: true });
  }
  // Método para obtener datos  de transaciones recibidas
  getTransactionsReceived(): Observable<any> {
    const url = `${this.baseUrl}/get-received-transactions`;
    return this.http.get(url, { withCredentials: true });
  }

  //Metodo para obtener datos de transaciones enviadas
  getTransactionsSent():  Observable<any> {
    const url = `${this.baseUrl}/get-send-transactions`;
    return this.http.get(url, { withCredentials: true });
  }
}
