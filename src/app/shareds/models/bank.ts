import {AbstractEntity} from "../core/model/abstract-entity";

export class Bank extends AbstractEntity {
    creation: Date;
    username: string;
    password: string;
    uuid: string;
    created: Date;
    enabled: boolean;
}
