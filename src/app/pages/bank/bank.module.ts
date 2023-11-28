import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BanksRoutingModule} from "./banks-routing.module";
import {BankFormComponent} from "./bank-form/bank-form.component";
import {BankListComponent} from "./bank-list/bank-list.component";
import {ComponentesModule} from "../../shareds/componentes/componentes.module";

@NgModule({
    declarations: [
        BankFormComponent,
        BankListComponent
    ],
    imports: [
        CommonModule,
        BanksRoutingModule,
        ComponentesModule
    ]
})
export class BankModule {
}
