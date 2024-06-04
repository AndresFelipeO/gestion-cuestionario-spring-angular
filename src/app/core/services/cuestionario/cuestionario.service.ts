import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, catchError, throwError } from 'rxjs';
import { CuestionarioDTORespuesta } from '../../../shared/dtos/cuestionario/dtoRespuesta/cuestionario.dto.respuesta';
import { CuestionarioDTOPeticion } from '../../../shared/dtos/cuestionario/dtoPetición/cuestionario.dto.peticion';
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService extends ApiService {

  private endPoint:string='/cuestionario'

  getCuestionario():Observable<CuestionarioDTORespuesta[]>{
    return this.http.get<CuestionarioDTORespuesta[]>(this.baseUrl+this.endPoint);
  }


  postCuestionario(cuestionario:CuestionarioDTOPeticion):Observable<CuestionarioDTOPeticion>{
    console.log("eeeee: "+ JSON.stringify(cuestionario))
    return this.http.post<CuestionarioDTOPeticion>(this.baseUrl+this.endPoint, cuestionario, { headers: this.httpHeaders }).pipe(
      catchError(
        e => {
          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje);
          swal.fire('Error al crear el Cuestionario', e.error.mensaje, 'error');
          return throwError(e);
        })
    );
  }
}
