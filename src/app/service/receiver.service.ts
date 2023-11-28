import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AbstractCrudService} from "../shareds/core/service/abstract-crud.service";
import {Receiver} from "../shareds/models/receiver";
import {ReceiverDTO} from "../shareds/filters/receiver-dto";

@Injectable({
    providedIn: 'root'
})
export class ReceiverService extends AbstractCrudService<Receiver, ReceiverDTO> {
    constructor(http: HttpClient) {
        super('receivers', http);
    }

    consultar(filtro?: ReceiverDTO): Promise<any> {
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
                const receivers = response;

                const resultado = {
                    receivers,
                    total: response.totalElements
                };

                return resultado;
            });
    }
}
