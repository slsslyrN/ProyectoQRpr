import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { NewpasswordPage } from './newpassword.page';
import { AutentificaciónService } from '../servicio/autentificación.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { InjectionToken } from '@angular/core';
import { of } from 'rxjs';

describe('NewpasswordPage', () => {
  let component: NewpasswordPage;
  let fixture: ComponentFixture<NewpasswordPage>;

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

  const mockAutentificaciónService = {
    cambiarContrasena: jasmine.createSpy('cambiarContrasena').and.returnValue(Promise.resolve()),
  };

  const FIREBASE_OPTIONS = new InjectionToken('angularfire2.app.options');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewpasswordPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: AutentificaciónService, useValue: mockAutentificaciónService },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: AngularFirestore, useValue: mockAngularFirestore },
        { provide: FIREBASE_OPTIONS, useValue: {} }, // Proveedor de configuración de Firebase
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
