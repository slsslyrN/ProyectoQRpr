import { Component } from '@angular/core';
import { AutentificaciónService } from 'src/app/servicio/autentificación.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importar el router

@Component({
  selector: 'app-confnewpass',
  templateUrl: './confnewpass.page.html',
  styleUrls: ['./confnewpass.page.scss'],
})
export class ConfnewpassPage {
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';

  constructor(
    private authService: AutentificaciónService,
    private alertController: AlertController,
    private router: Router // Inyectar el router
  ) {}

  // Función para validar la nueva contraseña
  async validarNuevaContrasena(nuevaContrasena: string): Promise<boolean> {
    const letras = nuevaContrasena.replace(/[^a-zA-Z]/g, '').length;
    const numeros = nuevaContrasena.replace(/[^0-9]/g, '').length;

    if (nuevaContrasena.length < 12 || letras < 4 || numeros < 2) {
      await this.mostrarAlerta(
        'Error',
        'La contraseña debe tener al menos 12 caracteres, 4 letras y 2 números.'
      );
      return false;
    }
    return true;
  }

  // Función para mostrar alertas
  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  // Función que se llama al hacer click en el botón "Guardar Nueva Contraseña"
  async actualizarContrasena() {
    if (!this.nuevaContrasena || !this.confirmarContrasena) {
      await this.mostrarAlerta('Campos Vacíos', 'Por favor, ingresa las contraseñas.');
      return;
    }

    if (this.nuevaContrasena !== this.confirmarContrasena) {
      await this.mostrarAlerta('Contraseñas No Coinciden', 'Las contraseñas no coinciden.');
      return;
    }

    // Validar si la nueva contraseña cumple con los requisitos
    const esValida = await this.validarNuevaContrasena(this.nuevaContrasena);
    if (!esValida) return;

    try {
      // Aquí puedes llamar a un servicio para actualizar la contraseña en la base de datos
      await this.authService.cambiarContrasena(this.nuevaContrasena); // Asumiendo que existe un método en tu servicio
      await this.mostrarAlerta('Contraseña Actualizada', 'Tu contraseña se ha actualizado correctamente.');
      this.router.navigate(['/home']); // Redirigir al home
    } catch (error) {
      const errorMessage = (error as Error).message || 'Hubo un problema al actualizar la contraseña.';
      await this.mostrarAlerta('Error', errorMessage);
    }
  }
}
