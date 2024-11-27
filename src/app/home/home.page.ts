import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  pass: string = '';
  passwordVisible: boolean = false; // Variable para alternar la visibilidad de la contraseña

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async validarCampos(): Promise<boolean> {
    if (this.email.trim() === '' || this.pass.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Por favor, completa ambos campos.',
        buttons: ['OK'],
      });

      await alert.present();
      return false;
    }
    return true;
  }

  async ingresar() {
    if (await this.validarCampos()) {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.pass);
        console.log('Usuario autenticado:', userCredential.user);
        this.router.navigate(['/inicio']);
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          let errorMessage = 'Error desconocido';
          
          switch (error.code) {
            case 'auth/invalid-email':
              errorMessage = 'El correo electrónico no es válido.';
              break;
            case 'auth/wrong-password':
              errorMessage = 'Contraseña incorrecta.';
              break;
            case 'auth/user-not-found':
              errorMessage = 'No se encontró un usuario con este correo.';
              break;
            default:
              errorMessage = 'Hubo un error al intentar iniciar sesión.';
              break;
          }

          const alert = await this.alertController.create({
            header: 'Error de autenticación',
            message: errorMessage,
            buttons: ['OK'],
          });

          await alert.present();
          return;
        } else {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Hubo un problema inesperado. Inténtalo nuevamente.',
            buttons: ['OK'],
          });

          await alert.present();
          return;
        }
      }
    }
  }

  // Función para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
