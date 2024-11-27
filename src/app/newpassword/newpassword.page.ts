import { Component } from '@angular/core';
import { AutentificaciónService } from 'src/app/servicio/autentificación.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.page.html',
  styleUrls: ['./newpassword.page.scss'],
})
export class NewpasswordPage {
  email: string = ''; // Correo del usuario

  constructor(private authService: AutentificaciónService, private alertController: AlertController) {}

  // Función para solicitar el correo de recuperación
  async solicitarRecuperacion() {
    if (!this.email) {
      this.mostrarAlerta('Por favor, ingresa un correo válido.');
      return;
    }

    try {
      // Llamada al servicio de autenticación para enviar el correo
      await this.authService.enviarRecuperacionPassword(this.email);
      this.mostrarAlerta('Se ha enviado un correo para restablecer tu contraseña.');
      this.email = ''; // Limpiar el campo de correo
    } catch (error) {
      const errorMessage = (error as Error).message || 'Error al enviar el correo de recuperación.';
      this.mostrarAlerta(errorMessage); // Mostrar error si algo falla
    }
  }

  // Función para mostrar una alerta
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Recuperación de Contraseña',
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
