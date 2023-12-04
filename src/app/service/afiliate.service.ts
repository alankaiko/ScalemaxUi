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

        if (filtro.name)
            params = params.append('name', filtro.name);

        return this.http.get<any>(this.url(`?resumo`), {params})
            .toPromise()
            .then(response => {
                const afiliates = response;

                const resultado = {
                    afiliates,
                    total: response.totalElements
                };

                return resultado;
            });
    }
}
