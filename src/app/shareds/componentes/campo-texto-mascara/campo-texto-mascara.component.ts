import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-texto-mascara',
  templateUrl: './campo-texto-mascara.component.html',
  styleUrls: ['./campo-texto-mascara.component.css']
})
export class CampoTextoMascaraComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() style: { [key: string]: string; } = {};
  @Input() required: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() mascara: string;
  @Input() id: string;

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
