import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificaciónService } from 'src/app/servicio/autentificación.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  email: string = '';
  password: string = '';
  confpass: string = '';
  usuario: string = '';

  constructor(
    private router: Router,
    private authService: AutentificaciónService,
    private alertController: AlertController
  ) {}

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async validarNuevaContrasena(nuevaContrasena: string): Promise<boolean> {
    const letras = nuevaContrasena.replace(/[^a-zA-Z]/g, '').length;
    const numeros = nuevaContrasena.replace(/[^0-9]/g, '').length;

    if (nuevaContrasena.length < 12 || letras < 4 || numeros < 2) {
      await this.mostrarAlerta('Error', 'La contraseña debe tener al menos 12 caracteres, 4 letras y 2 números.');
      return false;
    }
    return true;
  }

  async onRegister() {
    if (this.password !== this.confpass) {
      await this.mostrarAlerta('Error', 'Las contraseñas son distintas, por favor arréglelo');
      return;
    }

    const validacionContrasena = await this.validarNuevaContrasena(this.password);
    if (!validacionContrasena) {
      return; // Si la contraseña no es válida, detén el registro
    }

    try {
      const confirmacion = await this.authService.registrarUsuario(this.email, this.password, { usuario: this.usuario });
      if (confirmacion) {
        await this.mostrarAlerta('Éxito', 'Usuario registrado con éxito.');
        this.router.navigate(['/home']);
      }
    } catch (error: any) {
      await this.mostrarAlerta('Error', error.message);
      console.error('Error al intentar registrar:', error);
    }
  }
}
