import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {
  ReactiveFormsModule
} from '@angular/forms';
import { NgxTurnstileModule } from 'ngx-turnstile';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxTurnstileModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent  {
  // private authService = inject(AuthService);
  // private _router = inject(Router);
  // public registrando$ = new BehaviorSubject<boolean>(false);
  // turnstileToken: string = '';
  // turnstileSiteKey: string = environment.turnstileSiteKey;
  // isProduction: boolean = environment.production;
  // public isLoading$ = new BehaviorSubject<boolean>(false);

  // formulario = new FormGroup({
  //   turnstileToken: new FormControl(''),
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl(
  //     '',
  //     Validators.compose([
  //       Validators.required,
  //       Validators.minLength(8),
  //       Validators.maxLength(20),
  //     ])
  //   ),
  //   confirmarContrasena: new FormControl('', [
  //     Validators.required,
  //     this.validarContrasena(),
  //   ]),
  //   terminoCondicion: new FormControl(
  //     '',
  //     Validators.compose([Validators.requiredTrue])
  //   ),
  // });

  // ngOnInit(): void {
  //   if (this.isProduction) {
  //     this.formulario
  //       .get('cf_turnstile_response')
  //       ?.addValidators([Validators.required]);
  //   }
  // }

  // validarContrasena(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const clave = control.root.get('password')?.value;
  //     const confirmarClave = control.value;

  //     return clave === confirmarClave ? null : { clavesDiferentes: true };
  //   };
  // }

  // onTurnstileSuccess(token: string): void {
  //   this.turnstileToken = token;
  //   this.formulario.get('turnstileToken')?.setValue(token);
  //   this.changeDetectorRef.detectChanges();
  // }

  // enviar() {
  //   this.registrando$.next(true);
  //   this.authService
  //     .registro(this.formulario.value)
  //     .pipe(finalize(() => this.registrando$.next(false)))
  //     .subscribe((resultado: RespuestaRegistro) => {
  //       if (resultado.usuario.id) {
  //         this.alerta.mensajaExitoso('Se ha creado el usuario exitosamente.');
  //         this._router.navigate(['auth/login']);
  //       }
  //     });
  // }
}
