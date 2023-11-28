import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabelaDadosComponent} from "./tabela-dados/tabela-dados.component";
import {TableModule} from "primeng/table";
import {CampoBotaoComponent} from "./campo-botao/campo-botao.component";
import {ButtonModule} from "primeng/button";

@NgModule({
    declarations: [
        TabelaDadosComponent,
        CampoBotaoComponent
    ],
    exports: [
        TabelaDadosComponent,
        CampoBotaoComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        ButtonModule
    ]
})
export class ComponentesModule {
}
