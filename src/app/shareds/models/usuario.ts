import {Permissao} from "./permissao";
import {AbstractEntity} from "../core/model/abstract-entity";

export class Usuario extends AbstractEntity {
    nome: string;
    sobrenome: string;
    login: string;
    senha: string;
    teste: string;
    permissoes: Permissao[];
}
