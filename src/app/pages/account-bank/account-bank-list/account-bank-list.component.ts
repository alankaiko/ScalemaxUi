import {Component, OnInit} from '@angular/core';
import {ColumnTable} from "../../../shareds/core/ColumnTable";
import {ConfirmationService, LazyLoadEvent} from "primeng/api";
import {AccountBank} from "../../../shareds/models/account-bank";
import {AccountBankDTO} from "../../../shareds/filters/account-bank-dto";
import {AccountBankService} from "../../../service/account-bank.service";

@Component({
    selector: 'app-account-bank-list',
    templateUrl: './account-bank-list.component.html',
    styleUrls: ['./account-bank-list.component.scss'],
    providers:[ConfirmationService]
})
export class AccountBankListComponent implements OnInit {
    accounts: AccountBank[];
    colunas: ColumnTable[] = [];
    totalRegistros = 0;
    filtro = new AccountBankDTO;

    constructor(private accountBankService: AccountBankService,
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
                titulo: 'Título',
                field: 'name',
                sortingField: 'name'
            },
            {
                titulo: 'Conta',
                field: 'code',
                sortingField: 'code',
                width: '15%'
            },
            {
                titulo: 'Agência',
                field: 'agency',
                sortingField: 'agency',
                width: '15%'
            }
        ];
    }

    findByFilter(pagina = 0) {
        this.filtro.pagina = pagina;
        return this.accountBankService.consultar(this.filtro)
            .then(response => {
                this.totalRegistros = response.total;
                this.accounts = response.accountbanks.content;
            }).catch(erro => console.log(erro));
    }

    changePage(event?: LazyLoadEvent) {
        setTimeout(() => {
            this.filtro.nome = event.globalFilter;
            const pagina = event.first! / event.rows!;
            this.findByFilter(pagina);
        }, 250);
    }

    delete(codigo: number) {
        this.confirmationService.confirm({
            message: 'Deseja Excluir este registro? ',
            accept: () => {
                this.accountBankService.deletar(codigo).pipe().subscribe(response => {
                    setTimeout(() => this.findByFilter(), 100);
                });
            }
        });
    }
}
