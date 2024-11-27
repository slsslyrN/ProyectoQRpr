import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfperfilPage } from './confperfil.page';

describe('ConfperfilPage', () => {
  let component: ConfperfilPage;
  let fixture: ComponentFixture<ConfperfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
