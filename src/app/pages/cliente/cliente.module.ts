import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteFormComponent} from './cliente-form/cliente-form.component';
import {ClienteRoutingModule} from "./cliente-routing.module";
import {ComponentesModule} from "../../shareds/componentes/componentes.module";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
    declarations: [
        ClienteListComponent,
        ClienteFormComponent
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        ComponentesModule,
        ToastModule,
        ConfirmDialogModule
    ]
})
export class ClienteModule {
}
