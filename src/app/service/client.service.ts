import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AbstractCrudService} from "../shareds/core/service/abstract-crud.service";
import {Client} from "../shareds/models/client";
import {ClientDTO} from "../shareds/filters/client-dto";

@Injectable({
    providedIn: 'root'
})
export class ClientService extends AbstractCrudService<Client, ClientDTO> {
    constructor(http: HttpClient) {
        super('clients', http);
    }

    consultar(filtro?: ClientDTO): Promise<any> {
        let params = new HttpParams({
            fromObject: {
                page: filtro.pagina.toString(),
                size: filtro.itensPorPagina.toString()
            }
        });

        if (filtro.nome)
            params = params.append('nome', filtro.nome);

        return this.http.get<any>(this.url(`?resumo`), {params})
            .toPromise()
            .then(response => {
                const clients = response;

                const resultado = {
                    clients,
                    total: response.totalElements
                };

                return resultado;
            });
    }
}
