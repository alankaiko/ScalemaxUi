import {Address} from "./address";
import {Contact} from "./contact";
import {AbstractEntity} from "../core/model/abstract-entity";

export class Client extends AbstractEntity {
    name: string;
    rg: string;
    cpf: string;
    login: string;
    password: string;
    contact: Contact;
    address: Address;
}
