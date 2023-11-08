import { Carrera } from "./carrera"
import { Universidad } from "./universidad"

export class FormacionAcademica{
    ID_Formacion_academica:number=0
    Nombre_Secundaria:string=""
    ID_Universidad:Universidad=new Universidad()
    ID_Carrera:Carrera=new Carrera()
}