import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BankListComponent} from "./bank-list/bank-list.component";
import {BankFormComponent} from "./bank-form/bank-form.component";

const routes: Routes = [
    {
        path: '',
        component: BankListComponent,
    },
    {
        path: 'banks/register',
        component: BankFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BanksRoutingModule {
}
