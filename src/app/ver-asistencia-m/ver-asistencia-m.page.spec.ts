import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerAsistenciaMPage } from './ver-asistencia-m.page';

describe('VerAsistenciaMPage', () => {
  let component: VerAsistenciaMPage;
  let fixture: ComponentFixture<VerAsistenciaMPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsistenciaMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
