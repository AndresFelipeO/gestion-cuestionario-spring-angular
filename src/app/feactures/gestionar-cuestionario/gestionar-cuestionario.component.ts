import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CuestionarioService } from '../../core/services/cuestionario/cuestionario.service';
import { CuestionarioDTORespuesta } from '../../shared/dtos/cuestionario/dtoRespuesta/cuestionario.dto.respuesta';
import { PreguntaDTOPeticion } from '../../shared/dtos/cuestionario/dtoPetición/pregunta.dto.peticion';
import { CuestionarioDTOPeticion } from '../../shared/dtos/cuestionario/dtoPetición/cuestionario.dto.peticion';
import { TipoPreguntaDTOPeticion } from '../../shared/dtos/cuestionario/dtoPetición/tipopregunta.dto.peticion';
import swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-cuestionario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestionar-cuestionario.component.html',
  styleUrl: './gestionar-cuestionario.component.css'
})
export class GestionarCuestionarioComponent implements OnInit {
  public errores: string[] = [];

  cuestionario: CuestionarioDTORespuesta[] = [];

  objCuestionario: CuestionarioDTOPeticion = new CuestionarioDTOPeticion;
  objPregunta: PreguntaDTOPeticion = new PreguntaDTOPeticion;

  constructor(private objCuestionarioService: CuestionarioService,private router: Router) {
    this.objCuestionario.preguntaEntities = [new PreguntaDTOPeticion];
    this.objPregunta.objTipoPreguntaEntity = new TipoPreguntaDTOPeticion;
  }

  ngOnInit(): void {
    this.objCuestionarioService.getCuestionario().subscribe(
      cuestionarios => this.cuestionario = cuestionarios
    );
  }

  public createCuestionario(): void {
    this.objCuestionario.preguntaEntities[0] = this.objPregunta;

    this.objCuestionarioService.postCuestionario(this.objCuestionario)
      .subscribe(
        respose => {
          this.router.navigate(['/']);
          swal.fire('Nuevo Cuestionario', `Cuestionario ${respose.titulo} creado con éxito!`, 'success');
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
