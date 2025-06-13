import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RecoverPasswordComponent {
  // private authService = inject(AuthService);
  // private _router = inject(Router);
  // public estaCargando$ = new BehaviorSubject<boolean>(false);

  // formulario = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  // });

  // recuperar() {
  //   if (this.formulario.valid) {
  //     this.estaCargando$.next(true);
  //     const emailValue = this.formulario.get('email').value;
  //     this.authService
  //       .recuperarClave(emailValue)
  //       .pipe(finalize(() => this.estaCargando$.next(false)))
  //       .subscribe((resultado: any) => {
  //         if (resultado.verificacion) {
  //           this.alerta.mensajaExitoso(
  //             'Hemos enviado un enlace al correo electrónico para restablecer tu contraseña .',
  //             'Solicitud exitosa.'
  //           );
  //           this._router.navigate(['auth/login']);
  //         }
  //       });
  //   } else {
  //     this.formulario.markAllAsTouched();
  //   }
  // }
}
