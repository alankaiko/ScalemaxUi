import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'campo-botao',
    templateUrl: './campo-botao.component.html',
    styleUrls: ['./campo-botao.component.css']
})
export class CampoBotaoComponent implements OnInit {
    @Input() style: { [key: string]: string; } = {};
    @Input() styleClass: string;
    @Input() disabled: boolean = false;
    @Input() pButton: string;
    @Input() pRipple!: string;
    @Input() type: string;
    @Input() label: string;
    @Input() icon: string;

    private value!: any;
    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(): void {
    }
}
