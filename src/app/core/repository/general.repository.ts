import { HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { QueryParams, RespuestaApi } from '../interfaces/api.interface';
import { HttpRepository } from './http.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralRepository {
  private httpRepository = inject(HttpRepository);

  /**
   * Realiza una consulta GET a la API
   * @param endpoint Ruta del endpoint a consultar
   * @param queryParams Parámetros de consulta opcionales
   * @returns Observable con la respuesta tipada
   */
  get<T>(endpoint: string, queryParams: QueryParams = {}): Observable<RespuestaApi<T>> {
    const params = this.buildHttpParams(queryParams);
    return this.httpRepository.get<RespuestaApi<T>>(endpoint, params);
  }

  /**
   * Realiza una consulta GET para obtener un único recurso
   * @param endpoint Ruta del endpoint a consultar
   * @param id Identificador del recurso
   * @returns Observable con la respuesta tipada
   */
  getById<T>(endpoint: string, id: string | number): Observable<T> {
    return this.httpRepository.get<T>(`${endpoint}/${id}`);
  }

  /**
   * Crea un nuevo recurso mediante POST
   * @param endpoint Ruta del endpoint
   * @param data Datos a enviar
   * @returns Observable con la respuesta tipada
   */
  create<T>(endpoint: string, data: any): Observable<T> {
    return this.httpRepository.post<T>(endpoint, data);
  }

  /**
   * Actualiza un recurso existente mediante PUT
   * @param endpoint Ruta del endpoint
   * @param id Identificador del recurso
   * @param data Datos a actualizar
   * @returns Observable con la respuesta tipada
   */
  update<T>(endpoint: string, id: string | number, data: any): Observable<T> {
    return this.httpRepository.put<T>(`${endpoint}/${id}`, data);
  }

  /**
   * Actualiza parcialmente un recurso mediante PATCH
   * @param endpoint Ruta del endpoint
   * @param id Identificador del recurso
   * @param data Datos a actualizar
   * @returns Observable con la respuesta tipada
   */
  patch<T>(endpoint: string, id: string | number, data: any): Observable<T> {
    return this.httpRepository.patch<T>(`${endpoint}/${id}`, data);
  }

  /**
   * Elimina un recurso mediante DELETE
   * @param endpoint Ruta del endpoint
   * @param id Identificador del recurso
   * @returns Observable con la respuesta
   */
  delete(endpoint: string, id: string | number): Observable<any> {
    return this.httpRepository.delete(`${endpoint}/${id}`, {});
  }

  /**
   * Construye los parámetros HTTP a partir de un objeto de consulta
   * @param queryParams Objeto con los parámetros de consulta
   * @returns HttpParams configurados
   * @private
   */
  private buildHttpParams(queryParams: QueryParams): HttpParams {
    let params = new HttpParams();

    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        params = params.append(key, value.toString());
      }
    });

    return params;
  }
}
