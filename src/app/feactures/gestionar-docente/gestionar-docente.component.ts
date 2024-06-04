import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { DocenteDtoRespuesta } from '../../shared/dtos/docente/dtoRespuesta/docente.dto.respuesta';
import { FormsModule } from '@angular/forms';
import { DocenteService } from '../../core/services/docente/docente.service';
import { DepartamentoDTORespuesta } from '../../shared/dtos/docente/dtoRespuesta/departamento.dto.respuesta';
import { TelefonoDTORespuesta } from '../../shared/dtos/docente/dtoRespuesta/telefono.dto.respuesta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-docente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestionar-docente.component.html',
  styleUrl: './gestionar-docente.component.css'
})
export class GestionarDocenteComponent implements OnInit {
  public docente: DocenteDtoRespuesta = new DocenteDtoRespuesta();
  public errores: string[] = [];


  ngOnInit(): void {
    this.docente.departamentoEntities=[new DepartamentoDTORespuesta()];
    this.docente.objTelefonoEntity=new TelefonoDTORespuesta();

  }
  constructor(private docenteService: DocenteService,private router: Router) { }

  public crearDocente(): void {
    this.docenteService.postDocente(this.docente)
      .subscribe(
        respose => {
          this.router.navigate(['/']);
          swal.fire('Nuevo Docente', `Docente ${respose.nombres} creado con éxito!`, 'success');
        },
        err => {
          this.errores = []; // Clear previous errors
          if (err.error && err.error.mensaje) {
            this.errores.push(err.error.mensaje);
          }
          if (err.error && typeof err.error === 'object') {
            for (let key in err.error) {
              if (err.error.hasOwnProperty(key)) {
                this.errores.push(err.error[key]);
              }
            }
          } else {
            this.errores.push('Error desconocido');
          }
        }
      )
  }


}
