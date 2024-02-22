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
// Método para obtener datos de los depositos
getTransactions(userApiKey: string): Observable<any> {
  const url = `${this.baseUrl}/get-deposits`;

  // Pasa el userApiKey como parámetro en la solicitud
  const options = {
    withCredentials: true,
    headers: {
      'x-api-key': userApiKey
    }
  };

  return this.http.get(url, options);
}

// Método para obtener datos de retiros
getWithdrawals(userApiKey: string): Observable<any> {
  const url = `${this.baseUrl}/get-withdrawals`;

  // Pasa el userApiKey como parámetro en la solicitud
  const options = {
    withCredentials: true,
    headers: {
      'x-api-key': userApiKey
    }
  };

  return this.http.get(url, options);
}

// Método para obtener datos de transacciones recibidas
getTransactionsReceived(userApiKey: string): Observable<any> {
  const url = `${this.baseUrl}/get-received-transactions`;

  // Pasa el userApiKey como parámetro en la solicitud
  const options = {
    withCredentials: true,
    headers: {
      'x-api-key': userApiKey
    }
  };

  return this.http.get(url, options);
}

// Método para obtener datos de transacciones enviadas
getTransactionsSent(userApiKey: string): Observable<any> {
  const url = `${this.baseUrl}/get-send-transactions`;

  // Pasa el userApiKey como parámetro en la solicitud
  const options = {
    withCredentials: true,
    headers: {
      'x-api-key': userApiKey
    }
  };

  return this.http.get(url, options);
}
}
