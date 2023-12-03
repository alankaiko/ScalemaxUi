import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountBankListComponent} from "./account-bank-list/account-bank-list.component";
import {AccountBankFormComponent} from "./account-bank-form/account-bank-form.component";

const routes: Routes = [
    {
        path: '',
        component: AccountBankListComponent,
    },
    {
        path: 'register',
        component: AccountBankFormComponent,
    },
    {
        path: 'register/:cod',
        component: AccountBankFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountBankRoutingModule {
}
