import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Usuario} from "../shareds/models/usuario";
import {AbstractCrudService} from "../shareds/core/service/abstract-crud.service";
import {UsuarioDTO} from "../shareds/filters/usuario-dto";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends AbstractCrudService<Usuario, UsuarioDTO> {
    constructor(http: HttpClient) {
        super('usuarios', http);
    }

    consultar(filtro?: UsuarioDTO): Promise<any> {
        let params = new HttpParams({
            fromObject: {
                page: filtro.pagina.toString(),
                size: filtro.itensPorPagina.toString()
            }
        });

        if (filtro.nome)
            params = params.append('nome', filtro.nome);

        if (filtro.sobrenome)
            params = params.append('sobrenome', filtro.sobrenome);

        if (filtro.login)
            params = params.append('login', filtro.login);

        return this.http.get<any>(this.url(`?resumo`), {params})
            .toPromise()
            .then(response => {
                const usuarios = response;

                const resultado = {
                    usuarios,
                    total: response.totalElements
                };

                return resultado;
            });
    }

    VerificarSenhaUsuario(usuario: Usuario): Promise<boolean> {
        return this.http.post<boolean>(`${this.url}?verificarsenha`, usuario)
            .toPromise().then(response => {
                return response as boolean;
            });
    }

}
