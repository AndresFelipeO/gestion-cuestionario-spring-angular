import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarRespuestaComponent } from './gestionar-respuesta.component';

describe('GestionarRespuestaComponent', () => {
  let component: GestionarRespuestaComponent;
  let fixture: ComponentFixture<GestionarRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarRespuestaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
