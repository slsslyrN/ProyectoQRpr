import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },{
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'clase1',
    loadChildren: () => import('./clase1/clase1.module').then( m => m.Clase1PageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./opciones/opciones.module').then( m => m.OpcionesPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'newpassword',
    loadChildren: () => import('./newpassword/newpassword.module').then( m => m.NewpasswordPageModule)
  },
  {
    path: 'confnewpass',
    loadChildren: () => import('./confnewpass/confnewpass.module').then( m => m.ConfnewpassPageModule)
  },
  {
    path: 'confperfil',
    loadChildren: () => import('./confperfil/confperfil.module').then( m => m.ConfperfilPageModule)
  },
  {
    path: 'matematica',
    loadChildren: () => import('./matematica/matematica.module').then( m => m.MatematicaPageModule)
  },
  {
    path: 'lenguaje',
    loadChildren: () => import('./lenguaje/lenguaje.module').then( m => m.LenguajePageModule)
  },
  {
    path: 'ciencia',
    loadChildren: () => import('./ciencia/ciencia.module').then( m => m.CienciaPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'ver-asistencia-m',
    loadChildren: () => import('./ver-asistencia-m/ver-asistencia-m.module').then( m => m.VerAsistenciaMPageModule)
  },
  {
    path: 'ver-asistencia-c',
    loadChildren: () => import('./ver-asistencia-c/ver-asistencia-c.module').then( m => m.VerAsistenciaCPageModule)
  },
  {
    path: 'ver-asistencia-l',
    loadChildren: () => import('./ver-asistencia-l/ver-asistencia-l.module').then( m => m.VerAsistenciaLPageModule)
  },
  {
    path: 'ver-asistencia-h',
    loadChildren: () => import('./ver-asistencia-h/ver-asistencia-h.module').then( m => m.VerAsistenciaHPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
