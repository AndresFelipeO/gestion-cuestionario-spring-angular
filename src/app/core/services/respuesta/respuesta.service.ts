import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, catchError, throwError } from 'rxjs';
import swal from 'sweetalert2'
import { HttpParams } from '@angular/common/http';
import { DocenteDtoRespuesta } from '../../../shared/dtos/respuesta/dtoRespuesta/docente.dto.respuesta';
import { PeticionDTOPeticion } from '../../../shared/dtos/respuesta/dtoPeticion/peticion.dto.peticion';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService extends ApiService {

  
  private endPoint:string='/respuesta'

  getCuestionario(id:number):Observable<DocenteDtoRespuesta>{
    let params = new HttpParams().set('id', id.toString());

     return this.http.get<DocenteDtoRespuesta>(`${this.baseUrl}${this.endPoint}`, { params }).pipe(
      catchError(
        e => {
          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje);
          swal.fire('Error al consular', e.error.mensaje, 'error');
          return throwError(e);
        }
      )
     );
 
  }


  postRespuestas(peticion:PeticionDTOPeticion):Observable<PeticionDTOPeticion>{
    console.log("eeeee: "+ JSON.stringify(peticion))
    return this.http.post<PeticionDTOPeticion>(this.baseUrl+this.endPoint, peticion, { headers: this.httpHeaders }).pipe(
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
