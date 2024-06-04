import { Component } from '@angular/core';
import { RespuestaService } from '../../core/services/respuesta/respuesta.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DocenteDtoRespuesta } from '../../shared/dtos/respuesta/dtoRespuesta/docente.dto.respuesta';
import { PeticionDTOPeticion } from '../../shared/dtos/respuesta/dtoPeticion/peticion.dto.peticion';
import { CuestionarioDTOPeticion } from '../../shared/dtos/respuesta/dtoPeticion/cuestionario.dto.peticion';
import { DocenteDtoPeticion } from '../../shared/dtos/respuesta/dtoPeticion/docente.dto.peticion';
import { PreguntaDTOPeticion } from '../../shared/dtos/respuesta/dtoPeticion/pregunta.dto.peticion';
import { RespuestaDTOPeticion } from '../../shared/dtos/respuesta/dtoPeticion/respuesta.dto.peticion';
import swal from 'sweetalert2'

@Component({
  selector: 'app-gestionar-respuesta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestionar-respuesta.component.html',
  styleUrl: './gestionar-respuesta.component.css'
})
export class GestionarRespuestaComponent {
  public erroresBuscar: string[] = [];
  public errores:string[]=[];
  id!:number;
  docente!:DocenteDtoRespuesta;
  peticion:PeticionDTOPeticion=new PeticionDTOPeticion();
  

  constructor(private respuestaService:RespuestaService,private router: Router) {
    this.peticion.cuestionarioDTO=new CuestionarioDTOPeticion();
    this.peticion.docenteDTO=new DocenteDtoPeticion();
    this.peticion.preguntaDTO=new PreguntaDTOPeticion();
    this.peticion.preguntaDTO.respuestaEntities=[new RespuestaDTOPeticion()];
    
  }

  getDocenteCuestionario(){
    this.respuestaService.getCuestionario(this.id).subscribe(
      cuestionarios =>{ this.docente = cuestionarios},
      err => {
        this.erroresBuscar = []; // Clear previous errors
        if (err.error && err.error.mensaje) {
          this.erroresBuscar.push(err.error.mensaje);
        }
        if (err.error && typeof err.error === 'object') {
          for (let key in err.error) {
            if (err.error.hasOwnProperty(key)) {
              this.erroresBuscar.push(err.error[key]);
            }
          }
        } else {
          this.erroresBuscar.push('Error desconocido');
        }
      }
    );
  }

  postRegistrarPregunta(){
    this.respuestaService.postRespuestas(this.peticion)
      .subscribe(
        respose => {
          this.router.navigate(['/']);
          swal.fire('Nueva Respuesta', `Respuesta creado con éxito!`, 'success');
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
