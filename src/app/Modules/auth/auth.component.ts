import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

export type formBody = {
  name: string;
  email: string;
  password: string;
};

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  login: boolean = true;
  formBody: formBody = { name: '', email: '', password: '' };

  emailErrorMessage = '';
  passwordErrorMessage = '';
  loading: boolean = false;
  constructor(
    private authService: AuthServiceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  signIn() {
    this.loading = true;
    if (this.checkEmailFormat() && this.checkPassword()) {
      this.authService.login(this.formBody).subscribe((res) => {
        this.loading = false;
        if (res.response) {
          localStorage.setItem('jwt', res.response);
          this.showNotification('Iniciaste sesión con éxtio', '');
          this.router.navigate(['/webs']);
        } else {
          this.passwordErrorMessage = 'Email o contraseña incorrectos';
        }
      });
    }
  }

  register() {
    this.loading = true;
    if (this.checkEmailFormat() && this.checkPassword()) {
      this.authService.register(this.formBody).subscribe((res) => {
        this.loading = false;
        if (res.response) {
          this.showNotification('Cuenta creada con éxito', '');
          this.login = true;
        } else this.emailErrorMessage = 'El email ya existe';
      });
    }
  }

  private checkEmailFormat(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRegex.test(this.formBody.email)
      ? (this.emailErrorMessage = '')
      : (this.emailErrorMessage = 'Formato del email incorrecto');
    return emailRegex.test(this.formBody.email);
  }
  private checkPassword(): boolean {
    // Expresión regular para verificar si tiene al menos 8 caracteres, letras y números
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    passwordRegex.test(this.formBody.password)
      ? (this.passwordErrorMessage = '')
      : (this.passwordErrorMessage =
          'La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un carácter especial (como !, @, #, $)');
    return passwordRegex.test(this.formBody.password);
  }

  showNotification(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
