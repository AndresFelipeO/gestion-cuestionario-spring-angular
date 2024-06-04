import { CuestionarioDTOPeticion } from "./cuestionario.dto.peticion";
import { DocenteDtoPeticion } from "./docente.dto.peticion";
import { PreguntaDTOPeticion } from "./pregunta.dto.peticion";

export class PeticionDTOPeticion{
    cuestionarioDTO!:CuestionarioDTOPeticion;
    docenteDTO!:DocenteDtoPeticion;
    preguntaDTO!:PreguntaDTOPeticion;
}