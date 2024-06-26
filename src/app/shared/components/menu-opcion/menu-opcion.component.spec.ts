import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOpcionComponent } from './menu-opcion.component';

describe('MenuOpcionComponent', () => {
  let component: MenuOpcionComponent;
  let fixture: ComponentFixture<MenuOpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuOpcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
