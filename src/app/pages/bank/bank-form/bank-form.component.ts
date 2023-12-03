import {Component, OnInit} from '@angular/core';
import {Bank} from "../../../shareds/models/bank";
import {Location} from '@angular/common';
import {ConfirmationService, MessageService} from "primeng/api";
import {BankService} from "../../../service/bank.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-bank-form',
    templateUrl: './bank-form.component.html',
    styleUrls: ['./bank-form.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class BankFormComponent implements OnInit {
    bank = new Bank;

    constructor(private location: Location,
                private bankService: BankService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private confirmationService: ConfirmationService,
                private messageService: MessageService) {
    }

    ngOnInit(): void {
        const codigo = this.activatedRoute.snapshot.params.cod;

        if (codigo)
            this.bankService.buscarId(codigo).subscribe(response => this.bank = response);
    }

    get editando() {
        return Boolean(this.bank.codigo)
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
        this.bankService.salvar(this.bank).subscribe(response => {
            if (response) {
                this.bank = response;
                this.router.navigate(['/pages/banks']);
            } else {
                this.showMessage('error', 'Erro', 'Erro ao salvar Banco');
            }
        })
    }

    private atualizar() {
        this.bankService.atualizar(this.bank).subscribe(response => {
            if (response) {
                this.bank = response;
                this.router.navigate(['/pages/banks']);
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
