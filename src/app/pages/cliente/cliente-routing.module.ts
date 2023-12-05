import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteListComponent} from "./cliente-list/cliente-list.component";
import {ClienteFormComponent} from "./cliente-form/cliente-form.component";

const routes: Routes = [
    {
        path: '',
        component: ClienteListComponent,
    },
    {
        path: 'register',
        component: ClienteFormComponent,
    },
    {
        path: 'register/:cod',
        component: ClienteFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule {
}
