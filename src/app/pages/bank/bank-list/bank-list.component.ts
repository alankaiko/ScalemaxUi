import {Component, OnInit} from '@angular/core';
import {Bank} from "../../../shareds/models/bank";
import {ColumnTable} from "../../../shareds/core/ColumnTable";
import {BankDTO} from "../../../shareds/filters/bank-dto";
import {LazyLoadEvent} from "primeng/api";
import {BankService} from "../../../service/bank.service";

@Component({
    selector: 'app-bank-list',
    templateUrl: './bank-list.component.html',
    styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
    banks: Bank;
    colunas: ColumnTable[] = [];
    totalRegistros = 0;
    filtro = new BankDTO;

    constructor(private bankService: BankService) {
    }

    ngOnInit(): void {
        this.columns();
    }

    private columns() {
        this.colunas = [
            {
                titulo: 'Código',
                field: 'codigo',
                sortingField: 'codigo'
            },
            {
                titulo: 'Banco',
                field: 'nome',
                sortingField: 'nome'
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

    edit(codigo: any) {

    }

    delete(item: any) {

    }
}
