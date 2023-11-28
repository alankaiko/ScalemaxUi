import {Afiliate} from "./afiliate";
import {AbstractEntity} from "../core/model/abstract-entity";

export class Line extends AbstractEntity {
    code: string;
    name: string;
    price: string;
    barcode: string;
    afiliate: Afiliate;
}
