import {
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    TemplateRef,
    ViewChild
} from "@angular/core";
import {Table} from 'primeng/table';
import {get} from 'lodash';
import {LazyLoadEvent} from "primeng/api";
import {ColumnTable} from "../../core/ColumnTable";

@Component({
    selector: 'tabela-dados',
    templateUrl: './tabela-dados.component.html',
    styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent implements OnInit {
    @Input() entidades: any[] = [];
    @Input() colunas: ColumnTable[] = [];
    @Input() dataKey!: string;
    @Input() tituloTabela!: string;
    @Input() rowHover: boolean = false;
    @Input() lazy: boolean = false;
    @Input() showCurrentPageReport: boolean = false;
    @Input() paginator: boolean = false;
    @Input() rows: number = 12;
    @Input() totalRecords!: number;
    @Input() selectionMode: string = '';
    @Input() selection: any;
    @Input() styleClass: string;
    @Input() classLinha: string;
    @Input() globalFilterFields!: string[];
    @Input() responsiveLayout!: string;
    @Input() possuiFiltro: boolean = false;
    @Input() tabelaAgenda: boolean = false;
    @ContentChild('acoes') acoesRef!: TemplateRef<any>;
    @ViewChild('filtroTabela') filtroTabela: ElementRef;
    @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() onLazyLoad: EventEmitter<LazyLoadEvent> = new EventEmitter<LazyLoadEvent>();
    @Output() duploClicke: EventEmitter<any> = new EventEmitter<any>();

    @ContentChild('botoes') botoes!: TemplateRef<any>;
    @ContentChild('ver') verRef!: TemplateRef<any>;

    constructor() {
    }

    ngOnInit(): void {
    }

    clear(table: Table) {
        table.clear();
        this.filtroTabela.nativeElement.value = '';
    }

    getValorDoCampo(value: any, coluna: ColumnTable): any {
        const result = get(value, coluna.field);
        if (coluna.transformer != null) {
            return coluna.transformer(result, value);
        }

        return result;
    }
}
