import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AfiliateListComponent} from './afiliate-list/afiliate-list.component';
import {AfiliateFormComponent} from './afiliate-form/afiliate-form.component';
import {AfiliateRoutingModule} from "./afiliate-routing.module";
import {ComponentesModule} from "../../shareds/componentes/componentes.module";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";

@NgModule({
    declarations: [
        AfiliateListComponent,
        AfiliateFormComponent
    ],
    imports: [
        CommonModule,
        AfiliateRoutingModule,
        ComponentesModule,
        ConfirmDialogModule,
        ToastModule
    ]
})
export class AfiliateModule {
}
