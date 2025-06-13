import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {
  ReactiveFormsModule
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxTurnstileModule } from 'ngx-turnstile';
import { InputComponent } from "../../../../common/components/ui/form/input/input.component";
import { LabelComponent } from "../../../../common/components/ui/form/label/label.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    NgxTurnstileModule,
    InputComponent,
    LabelComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent  {
  // private tokenService = inject(TokenService);
  // private authService = inject(AuthService);
  // private _router = inject(Router);
  // turnstileToken: string = '';
  // turnstileSiteKey: string = environment.turnstileSiteKey;
  // public isLoading$ = new BehaviorSubject<boolean>(false);
  // isProduction: boolean = environment.production;

  // formularioLogin = new FormGroup({
  //   cf_turnstile_response: new FormControl(''),
  //   proyecto: new FormControl('RUTEO'),
  //   username: new FormControl('', [Validators.email, Validators.required]),
  //   password: new FormControl(
  //     '',
  //     Validators.compose([
  //       Validators.required,
  //       Validators.minLength(8),
  //       Validators.maxLength(20),
  //     ])
  //   ),
  // });

  // ngOnInit(): void {
  //   if (this.isProduction) {
  //     this.formularioLogin
  //       .get('cf_turnstile_response')
  //       ?.addValidators([Validators.required]);
  //   }
  // }

  // onTurnstileSuccess(token: string): void {
  //   this.turnstileToken = token;
  //   this.formularioLogin.get('cf_turnstile_response')?.setValue(token);
  //   this.changeDetectorRef.detectChanges();
  // }

  // enviar() {
  //   if (this.formularioLogin.invalid) {
  //     this.formularioLogin.markAllAsTouched();
  //     this.formularioLogin.markAsDirty();
  //     return;
  //   }

  //   this.isLoading$.next(true);
  //   this.authService
  //     .login(this.formularioLogin.value)
  //     .pipe(
  //       catchError(() => {
  //         return of(null);
  //       }),
  //       finalize(() => this.isLoading$.next(false))
  //     )
  //     .subscribe((resultado: RespuestaLogin) => {
  //       if (resultado.token) {
  //         let calcularTiempo = new Date(
  //           new Date().getTime() + environment.sessionLifeTime * 60 * 60 * 1000
  //         );
  //         this.store.dispatch(
  //           usuarioIniciar({
  //             usuario: resultado.user,
  //           })
  //         );
  //         this.tokenService.guardar(resultado.token, calcularTiempo);
  //         this._router.navigate(['contenedor']);
  //       }
  //     });
  // }

  // get username() {
  //   return this.formularioLogin.get('username');
  // }

  // get password() {
  //   return this.formularioLogin.get('password');
  // }
}
