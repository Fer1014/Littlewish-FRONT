import { Carrera } from "./carrera"
import { Universidad } from "./universidad"

export class FormacionAcademica{
    idFormacionAcademica:number=0;
    nombreSecundaria:string="";
    universidades:Universidad=new Universidad();
    carreras:Carrera=new Carrera();
}