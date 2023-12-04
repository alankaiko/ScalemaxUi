import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AbstractCrudService} from "../shareds/core/service/abstract-crud.service";
import {AccountBank} from "../shareds/models/account-bank";
import {AccountBankDTO} from "../shareds/filters/account-bank-dto";

@Injectable({
    providedIn: 'root'
})
export class AccountBankService extends AbstractCrudService<AccountBank, AccountBankDTO> {
    constructor(http: HttpClient) {
        super('accountbanks', http);
    }

    consultar(filtro?: AccountBankDTO): Promise<any> {
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
                const accountbanks = response;

                const resultado = {
                    accountbanks,
                    total: response.totalElements
                };

                return resultado;
            });
    }
}
