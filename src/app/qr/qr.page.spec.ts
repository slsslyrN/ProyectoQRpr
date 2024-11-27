import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { QRPage } from './qr.page';
import { QRlectorService } from '../servicio/qrlector.service';
import { AutentificaciónService } from '../servicio/autentificación.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { InjectionToken } from '@angular/core';
import { of } from 'rxjs';

describe('QRPage', () => {
  let component: QRPage;
  let fixture: ComponentFixture<QRPage>;

  const mockAngularFireAuth = {
    authState: of(null), // Simula que no hay usuario autenticado
    signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword').and.returnValue(Promise.resolve({})),
    createUserWithEmailAndPassword: jasmine.createSpy('createUserWithEmailAndPassword').and.returnValue(Promise.resolve({})),
    sendPasswordResetEmail: jasmine.createSpy('sendPasswordResetEmail').and.returnValue(Promise.resolve()),
    signOut: jasmine.createSpy('signOut').and.returnValue(Promise.resolve()),
  };

  const mockAngularFirestore = {
    collection: jasmine.createSpy('collection').and.returnValue({
      doc: jasmine.createSpy('doc').and.returnValue({
        set: jasmine.createSpy('set').and.returnValue(Promise.resolve()),
        get: jasmine.createSpy('get').and.returnValue(Promise.resolve({ exists: true, data: () => ({}) })),
        update: jasmine.createSpy('update').and.returnValue(Promise.resolve()),
      }),
    }),
  };

  const mockQRlectorService = {
    escanearQR: jasmine.createSpy('escanearQR').and.returnValue(Promise.resolve('mockQRData')),
    registrarDatosQR: jasmine.createSpy('registrarDatosQR').and.returnValue(Promise.resolve()),
  };

  const mockAutentificaciónService = {
    isAuthenticated: jasmine.createSpy('isAuthenticated').and.returnValue(true),
    cerrarSesion: jasmine.createSpy('cerrarSesion').and.returnValue(Promise.resolve()),
  };

  const FIREBASE_OPTIONS = new InjectionToken('angularfire2.app.options');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QRPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: QRlectorService, useValue: mockQRlectorService },
        { provide: AutentificaciónService, useValue: mockAutentificaciónService },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: AngularFirestore, useValue: mockAngularFirestore },
        { provide: FIREBASE_OPTIONS, useValue: {} }, // Proveedor de configuración de Firebase
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
