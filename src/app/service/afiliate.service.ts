import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AbstractCrudService} from "../shareds/core/service/abstract-crud.service";
import {Afiliate} from "../shareds/models/afiliate";
import {AfiliateDTO} from "../shareds/filters/afiliate-dto";

@Injectable({
    providedIn: 'root'
})
export class AfiliateService extends AbstractCrudService<Afiliate, AfiliateDTO> {
    constructor(http: HttpClient) {
        super('afiliates', http);
    }

    consultar(filtro?: AfiliateDTO): Promise<any> {
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
                const accounts = response;

                const resultado = {
                    accounts,
                    total: response.totalElements
                };

                return resultado;
            });
    }
}
