import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarDocenteComponent } from './gestionar-docente.component';

describe('GestionarDocenteComponent', () => {
  let component: GestionarDocenteComponent;
  let fixture: ComponentFixture<GestionarDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
