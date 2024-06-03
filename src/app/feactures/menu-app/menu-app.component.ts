import { Component } from '@angular/core';
import { MenuOpcionComponent } from '../../shared/components/menu-opcion/menu-opcion.component';

@Component({
  selector: 'app-menu-app',
  standalone: true,
  imports: [MenuOpcionComponent],
  templateUrl: './menu-app.component.html',
  styleUrl: './menu-app.component.css'
})
export class MenuAppComponent {

}
