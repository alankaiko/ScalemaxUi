import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AbstractCrudService} from "../shareds/core/service/abstract-crud.service";
import {Line} from "../shareds/models/line";
import {LineDTO} from "../shareds/filters/line-dto";

@Injectable({
    providedIn: 'root'
})
export class LineService extends AbstractCrudService<Line, LineDTO> {
    constructor(http: HttpClient) {
        super('lines', http);
    }

    consultar(filtro?: LineDTO): Promise<any> {
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
                const lines = response;

                const resultado = {
                    lines,
                    total: response.totalElements
                };

                return resultado;
            });
    }
}
