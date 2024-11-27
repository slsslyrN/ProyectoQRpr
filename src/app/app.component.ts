import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private menu: MenuController) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigated to:', event.url);
        this.verificarRuta(event.url);
      }
    });
  }

  verificarRuta(url: string) {
    const rutasSinMenu = ['/home', '/registro', '/newpassword.page'];
    
    if (rutasSinMenu.includes(url)) {
      this.menu.enable(false); 
      this.cerrarMenu(); 
    } else {
      this.menu.enable(true); 
    }
  }

  cerrarMenu() {
    this.menu.close(); // Método para cerrar el menú
  }
}