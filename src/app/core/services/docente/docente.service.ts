import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, catchError, throwError } from 'rxjs';
import { DocenteDto } from '../../../shared/dtos/docente/dtoRespuesta/docente.dto';
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class DocenteService extends ApiService {
  private endPoint = '/docente';

  postDocente(docente:DocenteDto):Observable<DocenteDto>{
    return this.http.post<DocenteDto>(this.baseUrl+this.endPoint, docente, { headers: this.httpHeaders }).pipe(
      catchError(
        e => {
          
          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje);
          swal.fire('Error al crear el cliente', e.error.mensaje, 'error');
          return throwError(e);
        })
    );

  }

}
