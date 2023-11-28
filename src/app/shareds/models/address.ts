import {EnumEstado} from "../enuns/enum-estado";

export class Address {
    id: number;
    street: string;
    complement: string;
    neighborhood: string;
    city: string;
    uf: EnumEstado;
    cep: string;
    number: string;
}
