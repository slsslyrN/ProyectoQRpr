import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerAsistenciaCPage } from './ver-asistencia-c.page';

describe('VerAsistenciaCPage', () => {
  let component: VerAsistenciaCPage;
  let fixture: ComponentFixture<VerAsistenciaCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsistenciaCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
