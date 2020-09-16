import { EmailValidator } from '@angular/forms';

export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    tipoDocumento: string;
    documento: string;
    lugarResidencia: string;
    fechaNacimiento: string;
    email: string;
    telefono: string;
    usuario: string;
    password: string;  
}