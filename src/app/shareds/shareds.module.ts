import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentesModule} from "./componentes/componentes.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ComponentesModule
    ],
    exports: [ComponentesModule]
})
export class SharedsModule {
}
