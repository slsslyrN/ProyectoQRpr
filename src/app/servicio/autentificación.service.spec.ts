import { TestBed } from '@angular/core/testing';
import { AutentificaciónService } from './autentificación.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { InjectionToken } from '@angular/core';

describe('AutentificaciónService', () => {
  let service: AutentificaciónService;

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

  const FIREBASE_OPTIONS = new InjectionToken('angularfire2.app.options');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Importa RouterTestingModule si el servicio usa Router
      providers: [
        AutentificaciónService,
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: AngularFirestore, useValue: mockAngularFirestore },
        { provide: FIREBASE_OPTIONS, useValue: {} }, // Proveedor de configuración de Firebase
      ],
    });

    service = TestBed.inject(AutentificaciónService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
