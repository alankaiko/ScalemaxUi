import {Afiliate} from "./afiliate";
import {AbstractEntity} from "../core/model/abstract-entity";

export class Receiver extends AbstractEntity {
    birthDate: Date;
    cpf: string;
    nameMother: string;
    whastapp: string;
    afiliate: Afiliate;
}
