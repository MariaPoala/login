import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module'; // Importa el módulo de enrutamiento

const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Usa AppRoutingModule para el enrutamiento
    { provide: AppRoutingModule, useClass: AppRoutingModule },
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
