import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'campo-toolbar',
  templateUrl: './campo-toolbar.component.html',
  styleUrls: ['./campo-toolbar.component.css']
})
export class CampoToolbarComponent implements OnInit {
  @ContentChild('ladoEsquerdo') ladoEsquerdo!: TemplateRef<any>;
  @ContentChild('ladoDireito') ladoDireito!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
