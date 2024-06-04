import { DepartamentoDTORespuesta } from "./departamento.dto.respuesta";
import { TelefonoDTORespuesta } from "./telefono.dto.respuesta";

export class DocenteDtoRespuesta{
    nombres!:string;
    apellidos!:string;
    correo!:string;
    tipoIdentificacion!:string;
    numeroIdentificacion!:string;
    vinculacion!:string;
    departamentoEntities!:DepartamentoDTORespuesta[];
    objTelefonoEntity!:TelefonoDTORespuesta;
}