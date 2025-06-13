import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '@app/core/services/cookie.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthRepository } from '../../repositories/auth.repository';
import { loginFailure, loginRequest, loginSuccess } from '../actions/login.action';
import { LOCALSTORAGE_KEYS } from '@app/core/constants/localstorage-keys.constant';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private cookieService = inject(CookieService);
  private authRepository = inject(AuthRepository);
  private router = inject(Router);

  constructor() {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest),
      switchMap(({ credentials }) =>
        this.authRepository.login(credentials).pipe(
          map(response => {
            // Guardar la información del usuario en una cookie para rehidratar el estado
            this.cookieService.set(LOCALSTORAGE_KEYS.USER, JSON.stringify(response.user), {
              expires: 1,
              path: '/',
            });
            this.cookieService.set(LOCALSTORAGE_KEYS.AUTH_TOKEN, response.token, {
              expires: 1,
              path: '/',
            });
            this.cookieService.set(LOCALSTORAGE_KEYS.REFRESH_TOKEN, response['refresh-token'], {
              expires: 1,
              path: '/',
            });

            return loginSuccess({ response });
          }),
          catchError(error => of(loginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          // Redirigir al usuario a la página principal después de un login exitoso
          this.router.navigate(['/dashboard']);
        })
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFailure),
        tap(({ error }) => {
          // Aquí podrías mostrar un mensaje de error o realizar otras acciones
          console.error('Error de autenticación:', error);
        })
      ),
    { dispatch: false }
  );
}
