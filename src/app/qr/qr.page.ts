import { Component } from '@angular/core';
import { QRlectorService } from 'src/app/servicio/qrlector.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage  {
  qrUsuario: string | null = null;

  constructor(private qrService: QRlectorService) {}


  async startScan() {
    try {
      const resultado = await this.qrService.escanearQR();
      if (resultado) {
        this.qrUsuario = resultado;
        await this.qrService.registrarDatosQR(resultado);
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
}
