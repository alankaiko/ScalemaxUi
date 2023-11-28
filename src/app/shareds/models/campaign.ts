import {EnumStatus} from "../enuns/enum-status";
import {OrderCampgain} from "./order-campgain";
import {AbstractEntity} from "../core/model/abstract-entity";
import {Usuario} from "./usuario";

export class Campaign extends AbstractEntity {
    status: EnumStatus;
    code: string;
    name: string;
    dateCampgain: Date;
    usuario: Usuario;
    model: boolean;
    orders: OrderCampgain[];
}
