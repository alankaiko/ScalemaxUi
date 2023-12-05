import {Component, OnInit} from '@angular/core';
import {ColumnTable} from "../../../shareds/core/ColumnTable";
import {ConfirmationService, LazyLoadEvent} from "primeng/api";
import {Client} from "../../../shareds/models/client";
import {ClientDTO} from "../../../shareds/filters/client-dto";
import {ClientService} from "../../../service/client.service";

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.scss'],
    providers: [ConfirmationService]
})
export class ClienteListComponent implements OnInit {
    clients: Client[];
    colunas: ColumnTable[] = [];
    totalRegistros = 0;
    filtro = new ClientDTO;

    constructor(private clientService: ClientService,
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
                titulo: 'Login',
                field: 'login',
                sortingField: 'login',
                width: '20%'
            }
        ];
    }

    findByFilter(pagina = 0) {
        this.filtro.pagina = pagina;
        return this.clientService.consultar(this.filtro)
            .then(response => {
                this.totalRegistros = response.total;
                this.clients = response.clients.content;
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
                this.clientService.deletar(codigo).pipe().subscribe(response => {
                    setTimeout(() => this.findByFilter(), 100);
                });
            }
        });
    }
}
