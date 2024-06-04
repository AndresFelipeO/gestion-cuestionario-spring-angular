import { RespuestaDTORespuesta } from "./respuesta.dto.respuesta";

export class DocenteDtoRespuesta{
    nombres!:string;
    apellidos!:string;
    correo!:string;
    tipoIdentificacion!:string;
    numeroIdentificacion!:string;
    vinculacion!:string;
    respuestaEntities!:RespuestaDTORespuesta[];
}