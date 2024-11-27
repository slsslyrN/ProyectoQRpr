import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerAsistenciaHPage } from './ver-asistencia-h.page';

describe('VerAsistenciaHPage', () => {
  let component: VerAsistenciaHPage;
  let fixture: ComponentFixture<VerAsistenciaHPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsistenciaHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
