import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {AccountBank} from "../../../shareds/models/account-bank";
import {AccountBankService} from "../../../service/account-bank.service";
import {BankService} from "../../../service/bank.service";

@Component({
    selector: 'app-account-bank-form',
    templateUrl: './account-bank-form.component.html',
    styleUrls: ['./account-bank-form.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class AccountBankFormComponent implements OnInit {
    account = new AccountBank;
    dropBanks: any[] = [];

    constructor(private location: Location,
                private accountBankService: AccountBankService,
                private bankService: BankService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private confirmationService: ConfirmationService,
                private messageService: MessageService) {
    }

    ngOnInit(): void {
        const codigo = this.activatedRoute.snapshot.params.cod;

        if (codigo)
            this.accountBankService.buscarId(codigo).subscribe(response => this.account = response);

        this.carregarBanks();
    }

    get editando() {
        return Boolean(this.account.codigo)
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
        this.accountBankService.salvar(this.account).subscribe(account => {
            if (account) {
                this.account = account;
                this.router.navigate(['/pages/account-banks']);
            } else {
                this.showMessage('error', 'Erro', 'Erro ao salvar Banco');
            }
        })
    }

    private atualizar() {
        this.accountBankService.atualizar(this.account).subscribe(account => {
            if (account) {
                this.account = account;
                this.router.navigate(['/pages/account-banks']);
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

    carregarBanks() {
        this.bankService.listar()
            .subscribe(banks => {
                this.dropBanks = banks.map(bank => ({label: bank.name, value: bank}));
            });
    }
}
