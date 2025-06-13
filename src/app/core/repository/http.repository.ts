import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SubdominioService } from '@app/core/services/subdominio.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRepository {
  private subdominioService = inject(SubdominioService);
  private httpClient = inject(HttpClient);
  private baseUrl: string;

  constructor() {
    this.subdominioService.getSubdominioUrl().subscribe(urlApi => {
      this.baseUrl = urlApi;
    });
  }

  // Método GET para listas
  public get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.get<T>(url, { params });
  }

  // Método POST
  public post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.post<T>(url, data);
  }

  // Método PUT
  public put<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.put<T>(url, data);
  }

  // Método DELETE
  public delete(endpoint: string, data: any): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.delete(url, data);
  }

  public patch<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.patch<T>(url, data);
  }
}
