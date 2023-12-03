import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'campo-texto',
    templateUrl: './campo-texto.component.html',
    styleUrls: ['./campo-texto.component.css']
})
export class CampoTextoComponent implements OnInit {
    @Input() labelText: string;
    @Input() classe = "";
    @Input() maxlength = 250;
    @Input() type = "text";
    @Input() step: string;
    @Input() min: string;
    @Input() max: string;
    @Input() pattern: string;
    @Input() style: { [key: string]: string; } = {};
    @Input() campoTextoStyle: { [key: string]: string; } = {};
    @Input() classeLabel: { [key: string]: string; } = {};
    @Input() required: boolean = false;
    @Input() readOnly: boolean = false;
    @Input() disabled: boolean = false;
    @Input() placeholder: string = '';
    @Input() id: string;

    private _textoSelecionado!: any;
    @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(): void {
    }

    get texto(): any {
        return this._textoSelecionado;
    }

    @Input() set texto(value: any) {
        if(this._textoSelecionado === value)
            return;

        this._textoSelecionado = value;
        this.textoChange.emit(this._textoSelecionado);
    }
}
