import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-opcion',
  standalone: true,
  imports: [],
  templateUrl: './menu-opcion.component.html',
  styleUrl: './menu-opcion.component.css'
})
export class MenuOpcionComponent {
  @Input() titleCard='';
  @Input() urlImage='';
  @Input() urlRouter='';

  constructor(private router:Router){}

  redirectToGestionDocente(){
    this.router.navigate([this.urlRouter])
  }


}
