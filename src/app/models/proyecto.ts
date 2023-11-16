import { Usuarios } from "./usuarios"

export class Proyectos {
    idproyecto:number=0
    nombre:String=""
    descripcion:String=""
    fechaInicio: Date = new Date(Date.now())
    fechaFin: Date = new Date(Date.now())
    puestrobuscado:String=""
    //puntuacion
    
    //comentario
    users:Usuarios=new Usuarios();
}