import { Injectable } from '@angular/core';
import QrScanner from 'qr-scanner';
import { AutentificaciónService } from './autentificación.service';


@Injectable({
  providedIn: 'root'
})
export class QRlectorService {

  constructor(private authService: AutentificaciónService) {}

  async escanearQR(): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';

      fileInput.onchange = async (event: any) => {
        const file = event.target.files[0];
        if (file) {
          try {
            const resultado = await QrScanner.scanImage(file);
            resolve(resultado);
          } catch (error) {
            console.error('Error al procesar la imagen o el contenido no es válido:', error);
            reject('Error al procesar el QR. Verifica el contenido.');
          }
        } else {
          reject('No se seleccionó ningún archivo.');
        }
      };

      fileInput.click();
    });
  }

  async registrarDatosQR(qrData: string): Promise<void> {
    try {
      const datos = JSON.parse(qrData);
      const { seccion, code, fecha, asistencia } = datos;

      if (seccion && code && fecha && typeof asistencia === 'boolean') {
        await this.authService.registrarDatosQR(seccion, code, fecha, asistencia);
        console.log('Datos del QR registrados con éxito');
        alert('Datos registrados exitosamente');
      } else {
        console.error('El contenido del QR no contiene los datos esperados');
        alert('El QR no contiene los datos necesarios.');
      }
    } catch (error) {
      console.warn('El QR no contiene datos JSON válidos o hay un error de formato.');
      alert('Error en el formato de los datos del QR.');
    }
  }
}
