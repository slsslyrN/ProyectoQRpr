import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LenguajePage } from './lenguaje.page';

describe('LenguajePage', () => {
  let component: LenguajePage;
  let fixture: ComponentFixture<LenguajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
