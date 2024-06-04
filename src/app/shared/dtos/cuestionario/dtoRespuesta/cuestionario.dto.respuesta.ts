import { PreguntaDTORespuesta } from "./pregunta.dto.respuesta";

export class CuestionarioDTORespuesta{
    idCuestionario!:number;
    titulo!:string;
    descripcion!:string;
    preguntaEntities!:PreguntaDTORespuesta[];

}