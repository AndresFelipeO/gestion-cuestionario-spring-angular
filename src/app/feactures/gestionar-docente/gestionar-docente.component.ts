import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { DocenteDto } from '../../shared/dtos/docente/dtoRespuesta/docente.dto';
import { FormsModule } from '@angular/forms';
import { DocenteService } from '../../core/services/docente/docente.service';
import { DepartamentoDTO } from '../../shared/dtos/docente/dtoRespuesta/departamento.dto';
import { TelefonoDTO } from '../../shared/dtos/docente/dtoRespuesta/telefono.dto';

@Component({
  selector: 'app-gestionar-docente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestionar-docente.component.html',
  styleUrl: './gestionar-docente.component.css'
})
export class GestionarDocenteComponent implements OnInit {
  public docente: DocenteDto = new DocenteDto();
  public errores: string[] = [];


  ngOnInit(): void {
    this.docente.departamentoEntities=[new DepartamentoDTO()];
    this.docente.objTelefonoEntity=new TelefonoDTO();

  }
  constructor(private docenteService: DocenteService) { }

  public crearDocente(): void {
    this.docenteService.postDocente(this.docente)
      .subscribe(
        respose => {
          swal.fire('Nuevo cliente', `Cliente ${respose.nombres} creado con éxito!`, 'success');
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
