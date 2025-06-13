import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../common/services/http.service';
import { RespuestaLista } from '../types/api.type';

@Injectable({
  providedIn: 'root',
})
export class GeneralApiService {
  private _httpService = inject(HttpService);

  getLista<T>(filtros: Partial<any>) {
    return this._httpService.post<RespuestaLista<T>>(
      'general/funcionalidad/lista/',
      filtros
    );
  }

  guardarConfiguracion(configuracion: any, id: number) {
    return this._httpService.put(`general/configuracion/${id}/`, configuracion);
  }
}
