import { Usuarios } from "./usuarios"

export class Proyectos {
    idproyecto:number=0
    nombre:string=""
    descripcion:string=""
    fechaInicio: Date = new Date(Date.now())
    fechaFin: Date = new Date(Date.now())
    puestrobuscado:string=""
    //puntuacion
    
    //comentario
    users:Usuarios=new Usuarios()
}