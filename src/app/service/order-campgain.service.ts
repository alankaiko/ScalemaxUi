import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AbstractCrudService} from "../shareds/core/service/abstract-crud.service";
import {OrderCampgain} from "../shareds/models/order-campgain";
import {OrderCampgainDTO} from "../shareds/filters/order-campgain-dto";

@Injectable({
    providedIn: 'root'
})
export class OrderCampgainService extends AbstractCrudService<OrderCampgain, OrderCampgainDTO> {
    constructor(http: HttpClient) {
        super('ordercampgains', http);
    }

    consultar(filtro?: OrderCampgainDTO): Promise<any> {
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
                const orders = response;

                const resultado = {
                    orders,
                    total: response.totalElements
                };

                return resultado;
            });
    }
}
