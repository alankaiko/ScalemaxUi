import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-dropdown',
  templateUrl: './campo-dropdown.component.html',
  styleUrls: ['./campo-dropdown.component.css']
})
export class CampoDropdownComponent implements OnInit {
  @Input() labelText: string;
  @Input() placeholder: string;
  @Input() classe = '';
  @Input() corLabel = '';
  @Input() possuiCor: boolean = false;
  @Input() possuiLabel: boolean = true;
  @Input() options: any[] = [];
  @Input() style: { [key: string]: string; } = {};
  @Input() required: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() dataKey: string;
  @Input() optionLabel: any;
  @Input() optionValue: any;
  @Input() autoDisplayFirst: boolean = false;
  @Input() filtro: boolean = false;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

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
