import { TestBed } from '@angular/core/testing';
import { QRlectorService } from './qrlector.service';
import { AutentificaciónService } from './autentificación.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { InjectionToken } from '@angular/core';
import QrScanner from 'qr-scanner';

describe('QRlectorService', () => {
  let service: QRlectorService;
  let authServiceMock: jasmine.SpyObj<AutentificaciónService>;

  const mockAngularFireAuth = {
    authState: jasmine.createSpyObj('authState', ['subscribe']),
    signInWithEmailAndPassword: jasmine.createSpy(),
    createUserWithEmailAndPassword: jasmine.createSpy(),
    sendPasswordResetEmail: jasmine.createSpy(),
    signOut: jasmine.createSpy(),
  };

  const FIREBASE_OPTIONS = new InjectionToken('angularfire2.app.options');

  beforeEach(() => {
    authServiceMock = jasmine.createSpyObj('AutentificaciónService', ['registrarDatosQR']);

    TestBed.configureTestingModule({
      providers: [
        QRlectorService,
        { provide: AutentificaciónService, useValue: authServiceMock },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: FIREBASE_OPTIONS, useValue: {} }, // Proveedor de opciones de Firebase
      ],
    });

    service = TestBed.inject(QRlectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Se deberia cargar correctamente los datos de QR', async () => {
    const mockQrData = JSON.stringify({
      seccion: 'A1',
      code: 'ABC123',
      fecha: '2024-11-01',
      asistencia: true,
    });

    await service.registrarDatosQR(mockQrData);

    expect(authServiceMock.registrarDatosQR).toHaveBeenCalledWith(
      'A1',
      'ABC123',
      '2024-11-01',
      true
    );
  });

  it('Deberia dar error si los datos del qr son incorrectos', async () => {
    spyOn(window, 'alert');

    const invalidQrData = 'invalidJsonString';
    await service.registrarDatosQR(invalidQrData);

    expect(window.alert).toHaveBeenCalledWith('Error en el formato de los datos del QR.');
  });
});
