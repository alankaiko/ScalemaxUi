import {Component, Input, OnInit} from '@angular/core';

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

    ngOnInit(): void {
    }
}
