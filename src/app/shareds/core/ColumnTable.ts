import {TemplateRef} from "@angular/core";
import {TipoField} from "./TipoField";

export interface ColumnTable {
  titulo: string;
  sortingField?: string;
  field?: string;
  width?: string;
  styleClass?: string;
  tipo?: TipoField;
  limitarCaracter?: boolean;
  command?: (valor: any) => void;
  transformer?: (valorCampo: any, entidade: any) => any;
  templateRef?: TemplateRef<any>;
}
