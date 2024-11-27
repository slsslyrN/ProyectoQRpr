import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerAsistenciaLPage } from './ver-asistencia-l.page';

describe('VerAsistenciaLPage', () => {
  let component: VerAsistenciaLPage;
  let fixture: ComponentFixture<VerAsistenciaLPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsistenciaLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
