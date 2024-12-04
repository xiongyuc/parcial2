import { Historial } from "../historial/historial";

export class Pacientes {
    nombre:string;
    edad:number;
    diagnostico: string;
    historial: Historial;

    constructor(nombre:string,
        edad:number,
        diagnostico: string,
        historial: Historial,){this.nombre=nombre;this.edad=edad;this.diagnostico=diagnostico;this.historial=historial;}

}
