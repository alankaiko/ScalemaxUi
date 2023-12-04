import {Component, OnInit} from '@angular/core';
import {ColumnTable} from "../../../shareds/core/ColumnTable";
import {ConfirmationService, LazyLoadEvent} from "primeng/api";
import {Afiliate} from "../../../shareds/models/afiliate";
import {AfiliateDTO} from "../../../shareds/filters/afiliate-dto";
import {AfiliateService} from "../../../service/afiliate.service";

@Component({
    selector: 'app-afiliate-list',
    templateUrl: './afiliate-list.component.html',
    styleUrls: ['./afiliate-list.component.scss'],
    providers: [ConfirmationService]
})
export class AfiliateListComponent implements OnInit {
    afiliates: Afiliate[];
    colunas: ColumnTable[] = [];
    totalRegistros = 0;
    filtro = new AfiliateDTO;

    constructor(private afiliateService: AfiliateService,
                private confirmationService: ConfirmationService) {
    }

    ngOnInit(): void {
        this.columns();
    }

    private columns() {
        this.colunas = [
            {
                titulo: 'Código',
                field: 'codigo',
                sortingField: 'codigo',
                width: '10%'
            },
            {
                titulo: 'Nome',
                field: 'name',
                sortingField: 'name'
            },
            {
                titulo: 'Email',
                field: 'email',
                sortingField: 'email',
                width: '20%'
            }
        ];
    }

    findByFilter(pagina = 0) {
        this.filtro.pagina = pagina;
        return this.afiliateService.consultar(this.filtro)
            .then(response => {
                this.totalRegistros = response.total;
                this.afiliates = response.afiliates.content;
            }).catch(erro => console.log(erro));
    }

    changePage(event?: LazyLoadEvent) {
        setTimeout(() => {
            this.filtro.name = event.globalFilter;
            const pagina = event.first! / event.rows!;
            this.findByFilter(pagina);
        }, 250);
    }

    delete(codigo: number) {
        this.confirmationService.confirm({
            message: 'Deseja Excluir este registro? ',
            accept: () => {
                this.afiliateService.deletar(codigo).pipe().subscribe(response => {
                    setTimeout(() => this.findByFilter(), 100);
                });
            }
        });
    }
}
