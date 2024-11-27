import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage implements OnInit {
  currentDate: Date = new Date();  // Fecha actual
  email: string = ''; // Variable para el correo del usuario
  displayName: string = ''; // Variable para el nombre de usuario

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.email = user.email || '';  // Obtener el correo del usuario
        this.displayName = user.displayName || 'Usuario'; // Obtener el nombre del usuario o un valor por defecto
      }
    });
  }

  goToClass(className: string) {
    switch(className) {
      case 'matematica':
        this.navCtrl.navigateForward('/matematica');
        break;
      case 'lenguaje':
        this.navCtrl.navigateForward('/lenguaje');
        break;
      case 'clase1':
        this.navCtrl.navigateForward('/clase1');
        break;
      case 'historia':
        this.navCtrl.navigateForward('/historia');
        break;
    }
  }
}
