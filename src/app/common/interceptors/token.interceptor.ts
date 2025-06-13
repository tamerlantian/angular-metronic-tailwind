import { HttpHandlerFn, HttpRequest, type HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../../modules/auth/services/token.service';

/**
 * Interceptor que añade el token de autenticación a las peticiones HTTP si existe
 */
export const tokenInterceptor: HttpInterceptorFn = (request, next: HttpHandlerFn) => {
  const tokenService = inject(TokenService);

  // Verificar si hay un token válido
  if (tokenService.validarToken()) {
    // Si hay token válido, lo añadimos a la petición
    return next(agregarTokenARequest(request, tokenService));
  }

  // Si no hay token o no es válido, dejamos pasar la petición sin modificar
  return next(request);
};

/**
 * Función auxiliar para añadir el token a una petición HTTP
 * @param request Petición HTTP original
 * @param tokenService Servicio de token
 * @returns Nueva petición HTTP con el token añadido
 */
function agregarTokenARequest(
  request: HttpRequest<unknown>,
  tokenService: TokenService
): HttpRequest<unknown> {
  const token = tokenService.obtener();

  return request.clone({
    headers: request.headers.set('Authorization', `Bearer ${token}`),
  });
}
