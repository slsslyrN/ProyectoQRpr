import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from 'firebase/app';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Inicializa Firebase antes de arrancar la aplicación
initializeApp(environment.firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
