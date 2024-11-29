// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://127.0.0.1:8000/api/token/'; // Tu API de login

//   constructor(private http: HttpClient, private router: Router) {}

//   // Método para hacer login
//   login(usuario: string, password: string): Observable<any> {
//     return this.http.post<any>(this.apiUrl, { usuario, password });
//   }

//   // Método para guardar el token
//   setToken(token: string): void {
//     localStorage.setItem('accessToken', token);
//   }

//   // Método para obtener el token
//   getToken(): string | null {
//     return localStorage.getItem('accessToken');
//   }

//   // Verificar si el usuario está autenticado
//   isLoggedIn(): boolean {
//     return !!this.getToken();
//   }

//   // Método para cerrar sesión
//   logout(): void {
//     localStorage.removeItem('accessToken');
//     this.router.navigate(['/login']); // Redirige a la página de login
//   }
// }
// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/token/'; // URL de la API de login

  constructor(private http: HttpClient, private router: Router) {}

  // Método para hacer login
  login(usuario: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { usuario, password });
  }

  // Método para guardar el token
  setToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  // Método para obtener el token
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  // Verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']); // Redirige a la página de login
  }
}
