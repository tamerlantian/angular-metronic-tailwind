import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubdominioService {
  private URL_API = environment.api_base;

  constructor(private store: Store) {}

  /**
   * Obtiene la URL del subdominio actual de forma reactiva
   * @returns Observable con la URL completa del subdominio
   */
  getSubdominioUrl(): Observable<string> {
    // return this.store.select(obtenerContenedorSubdominio).pipe(
    //   map(subdominio => {
    //     if (!subdominio) {
    //       return this.URL_API // URL por defecto si no hay subdominio
    //     }

    //     return this.URL_API.replace('subdominio', 'subdominio');
    //   })
    // );
    return of('nectar');
  }

  /**
   * Construye una URL completa para una ruta específica usando el subdominio actual
   * @param path Ruta relativa para añadir a la URL base del subdominio
   * @returns Observable con la URL completa
   */
  buildUrl(path: string): Observable<string> {
    return this.getSubdominioUrl().pipe(
      map(baseUrl => {
        // Asegurarse de que la URL base termina con / y la ruta no comienza con /
        const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
        const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
        return `${normalizedBaseUrl}${normalizedPath}`;
      })
    );
  }
}
