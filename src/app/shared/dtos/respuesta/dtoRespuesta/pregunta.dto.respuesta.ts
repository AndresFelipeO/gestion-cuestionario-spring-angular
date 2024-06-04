import { CuestionarioDTORespuesta } from "./cuestionario.dto.respuesta";
import { TipoPreguntaDTORespuesta } from "./tipopregunta.dto.respuesta";

export class PreguntaDTORespuesta{
    idpregunta!:number;
    enunciado!:string;
    objTipoPreguntaEntity!:TipoPreguntaDTORespuesta;
    objCuestionarioEntity!:CuestionarioDTORespuesta;
}