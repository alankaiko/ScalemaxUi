import {AbstractDTO} from "../core/model/dto/abstract-dto";

export class UsuarioDTO extends AbstractDTO {
    nome: string;
    sobrenome: string;
    login: string;
}
