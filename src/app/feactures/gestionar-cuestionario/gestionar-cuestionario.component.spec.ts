import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarCuestionarioComponent } from './gestionar-cuestionario.component';

describe('GestionarCuestionarioComponent', () => {
  let component: GestionarCuestionarioComponent;
  let fixture: ComponentFixture<GestionarCuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarCuestionarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarCuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
