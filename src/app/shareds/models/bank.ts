import {AbstractEntity} from "../core/model/abstract-entity";

export class Bank extends AbstractEntity {
    creation: Date;
    gap: number;
    name: string;
    code: string;
    description: string;
}
