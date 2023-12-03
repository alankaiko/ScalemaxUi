import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountBankRoutingModule} from "./account-bank-routing.module";
import {AccountBankListComponent} from './account-bank-list/account-bank-list.component';
import {AccountBankFormComponent} from './account-bank-form/account-bank-form.component';
import {ComponentesModule} from "../../shareds/componentes/componentes.module";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
    declarations: [
        AccountBankListComponent,
        AccountBankFormComponent
    ],
    imports: [
        CommonModule,
        AccountBankRoutingModule,
        ComponentesModule,
        ToastModule,
        ConfirmDialogModule
    ]
})
export class AccountBankModule {
}
