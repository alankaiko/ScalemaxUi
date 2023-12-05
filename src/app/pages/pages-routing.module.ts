import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'banks',
        loadChildren: () => import('./bank/bank.module').then(m => m.BankModule)
    },
    {
        path: 'account-banks',
        loadChildren: () => import('./account-bank/account-bank.module').then(m => m.AccountBankModule)
    },
    {
        path: 'afiliates',
        loadChildren: () => import('./afiliate/afiliate.module').then(m => m.AfiliateModule)
    },
    {
        path: 'clients',
        loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
