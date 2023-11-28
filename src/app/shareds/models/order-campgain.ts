import {Afiliate} from "./afiliate";
import {Line} from "./line";
import {AbstractEntity} from "../core/model/abstract-entity";

export class OrderCampgain extends AbstractEntity {
    code: string;
    name: string;
    price: string;
    afiliate: Afiliate;
    lines: Line;
}
