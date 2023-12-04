import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {Afiliate} from "../../../shareds/models/afiliate";
import {AfiliateService} from "../../../service/afiliate.service";

@Component({
    selector: 'app-afiliate-form',
    templateUrl: './afiliate-form.component.html',
    styleUrls: ['./afiliate-form.component.scss'],
    providers: [ConfirmationService, MessageService]
})
export class AfiliateFormComponent implements OnInit {
    afiliate = new Afiliate;

    constructor(private location: Location,
                private afiliateService: AfiliateService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private confirmationService: ConfirmationService,
                private messageService: MessageService) {
    }

    ngOnInit(): void {
        const codigo = this.activatedRoute.snapshot.params.cod;

        if (codigo)
            this.afiliateService.buscarId(codigo).subscribe(afiliate => this.afiliate = afiliate);
    }

    get editando() {
        return Boolean(this.afiliate.codigo)
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
        this.afiliateService.salvar(this.afiliate).subscribe(afiliate => {
            if (afiliate) {
                this.afiliate = afiliate;
                this.router.navigate(['/pages/afiliates']);
            } else {
                this.showMessage('error', 'Erro', 'Erro ao salvar Banco');
            }
        })
    }

    private atualizar() {
        this.afiliateService.atualizar(this.afiliate).subscribe(afiliate => {
            if (afiliate) {
                this.afiliate = afiliate;
                this.router.navigate(['/pages/afiliates']);
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
