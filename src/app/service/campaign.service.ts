import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AbstractCrudService} from "../shareds/core/service/abstract-crud.service";
import {Campaign} from "../shareds/models/campaign";
import {CampaignDTO} from "../shareds/filters/campaign-dto";

@Injectable({
    providedIn: 'root'
})
export class CampaignService extends AbstractCrudService<Campaign, CampaignDTO> {
    constructor(http: HttpClient) {
        super('campaigns', http);
    }

    consultar(filtro?: CampaignDTO): Promise<any> {
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
                const campaigns = response;

                const resultado = {
                    campaigns,
                    total: response.totalElements
                };

                return resultado;
            });
    }
}
