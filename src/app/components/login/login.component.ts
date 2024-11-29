import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.usuario, this.password).subscribe({
      next: (response) => {
        // Guarda el token recibido
        this.authService.setToken(response.access);
        this.router.navigate(['/home']); // Redirige a la página principal
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
        console.error('Error de login:', err);
      }
    });
  }
}
