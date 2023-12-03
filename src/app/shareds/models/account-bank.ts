import {Bank} from "./bank";
import {AbstractEntity} from "../core/model/abstract-entity";

export class AccountBank extends AbstractEntity {
    email: string;
    name: string;
    code: string;
    agency: string;
    passwordCard: string;
    passwordEmail: string;
    passwordApp: string;
    bank: Bank;
}
