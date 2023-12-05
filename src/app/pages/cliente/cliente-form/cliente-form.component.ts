import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {Client} from "../../../shareds/models/client";
import {ClientService} from "../../../service/client.service";

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class ClienteFormComponent implements OnInit {
    client = new Client;

    constructor(private location: Location,
                private clientService: ClientService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private confirmationService: ConfirmationService,
                private messageService: MessageService) {
    }

    ngOnInit(): void {
        const codigo = this.activatedRoute.snapshot.params.cod;

        if (codigo)
            this.clientService.buscarId(codigo).subscribe(client => this.client = client);
    }

    get editando() {
        return Boolean(this.client.codigo)
    }

    salvar() {
        if (this.editando) {
            this.atualizar();
            return;
        }

        this.adicionar();
    }

    voltar() {
        this.location.back();
    }

    private adicionar() {
        this.clientService.salvar(this.client).subscribe(client => {
            if (client) {
                this.client = client;
                this.router.navigate(['/pages/clients']);
            } else {
                this.showMessage('error', 'Erro', 'Erro ao salvar Banco');
            }
        })
    }

    private atualizar() {
        this.clientService.atualizar(this.client).subscribe(client => {
            if (client) {
                this.client = client;
                this.router.navigate(['/pages/clients']);
            } else {
                this.showMessage('error', 'Erro', 'Erro ao salvar Banco');
            }
        })
    }

    private showMessage(severity: string, summary: string, message: string) {
        this.messageService.add({
            severity: severity,
            summary: summary,
            detail: message,
            life: 6000
        });
    }
}
