import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AbstractCrudService} from "../shareds/core/service/abstract-crud.service";
import {Bank} from "../shareds/models/bank";
import {BankDTO} from "../shareds/filters/bank-dto";

@Injectable({
    providedIn: 'root'
})
export class BankService extends AbstractCrudService<Bank, BankDTO> {
    constructor(http: HttpClient) {
        super('banks', http);
    }

    consultar(filtro?: BankDTO): Promise<any> {
        let params = new HttpParams({
            fromObject: {
                page: filtro.pagina.toString(),
                size: filtro.itensPorPagina.toString()
            }
        });

        if (filtro.name)
            params = params.append('name', filtro.name);

        return this.http.get<any>(this.url() + '?resumo', {params})
            .toPromise()
            .then(response => {
                const banks = response;

                const resultado = {
                    banks,
                    total: response.totalElements
                };

                return resultado;
            });
    }
}
