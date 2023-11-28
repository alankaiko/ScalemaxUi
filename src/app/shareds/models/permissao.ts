import {EnumPermissao} from "../enuns/enum-permissao";
import {AbstractEntity} from "../core/model/abstract-entity";

export class Permissao extends AbstractEntity {
    descricao: EnumPermissao;
}
