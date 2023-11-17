import { Tarjeta } from "./tarjeta"
import { Proyecto } from "./proyecto"

export class Pago {
    idPago:number=0
    monto:number=0
    fecha: Date = new Date(Date.now())
    tarjeta:Tarjeta=new Tarjeta()
    proyecto:Proyecto=new Proyecto();
}