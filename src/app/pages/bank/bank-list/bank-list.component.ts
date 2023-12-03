import {Component, OnInit} from '@angular/core';
import {Bank} from "../../../shareds/models/bank";
import {ColumnTable} from "../../../shareds/core/ColumnTable";
import {BankDTO} from "../../../shareds/filters/bank-dto";
import {ConfirmationService, LazyLoadEvent} from "primeng/api";
import {BankService} from "../../../service/bank.service";

@Component({
    selector: 'app-bank-list',
    templateUrl: './bank-list.component.html',
    styleUrls: ['./bank-list.component.scss'],
    providers: [ConfirmationService]
})
export class BankListComponent implements OnInit {
    banks: Bank[];
    colunas: ColumnTable[] = [];
    totalRegistros = 0;
    filtro = new BankDTO;

    constructor(private bankService: BankService,
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
                titulo: 'Banco',
                field: 'name',
                sortingField: 'name',
                width: '20%'
            },
            {
                titulo: 'Descrição',
                field: 'description',
                sortingField: 'description'
            }
        ];
    }

    findByFilter(pagina = 0) {
        this.filtro.pagina = pagina;
        return this.bankService.consultar(this.filtro)
            .then(response => {
                this.totalRegistros = response.total;
                this.banks = response.banks.content;
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
                this.bankService.deletar(codigo).pipe().subscribe(response => {
                    setTimeout(() => this.findByFilter(), 100);
                });
            }
        });
    }
}
