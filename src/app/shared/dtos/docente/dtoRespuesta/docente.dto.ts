import { DepartamentoDTO } from "./departamento.dto";
import { TelefonoDTO } from "./telefono.dto";

export class DocenteDto{
    nombres!:string;
    apellidos!:string;
    correo!:string;
    tipoIdentificacion!:string;
    numeroIdentificacion!:string;
    vinculacion!:string;
    departamentoEntities!:DepartamentoDTO[];
    objTelefonoEntity!:TelefonoDTO;
}