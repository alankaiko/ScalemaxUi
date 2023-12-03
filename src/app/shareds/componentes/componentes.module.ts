import {NgModule} from '@angular/core';
import {AutoCompleteModule} from "primeng/autocomplete";
import {SharedModule} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {CampoTextoComponent} from "./campo-texto/campo-texto.component";
import {TabelaDadosComponent} from "./tabela-dados/tabela-dados.component";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {TabViewModule} from "primeng/tabview";
import {FileUploadModule} from "primeng/fileupload";
import {InputMaskModule} from "primeng/inputmask";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {SpinnerModule} from "primeng/spinner";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {CampoBotaoComponent} from "./campo-botao/campo-botao.component";
import {CommonModule} from "@angular/common";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {CardModule} from "primeng/card";
import {CampoToolbarComponent} from "./campo-toolbar/campo-toolbar.component";
import {CampoDropdownComponent} from "./campo-dropdown/campo-dropdown.component";

@NgModule({
    declarations: [
        TabelaDadosComponent,
        CampoBotaoComponent,
        CampoTextoComponent,
        CampoToolbarComponent,
        CampoDropdownComponent
    ],
    exports: [
        TabelaDadosComponent,
        CampoBotaoComponent,
        CampoTextoComponent,
        CampoToolbarComponent,
        CampoDropdownComponent
    ],
    imports: [
        CommonModule,
        AutoCompleteModule,
        SharedModule,
        FormsModule,
        ToastModule,
        TableModule,
        TabViewModule,
        FileUploadModule,
        InputMaskModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        SpinnerModule,
        RadioButtonModule,
        CardModule,
        InputNumberModule,
        CalendarModule,
        CheckboxModule,
        ButtonModule,
        ToolbarModule,
        DialogModule
    ]
})
export class ComponentesModule {
}
