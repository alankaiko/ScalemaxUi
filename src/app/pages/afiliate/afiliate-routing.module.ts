import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AfiliateListComponent} from "./afiliate-list/afiliate-list.component";
import {AfiliateFormComponent} from "./afiliate-form/afiliate-form.component";

const routes: Routes = [
    {
        path: '',
        component: AfiliateListComponent,
    },
    {
        path: 'register',
        component: AfiliateFormComponent,
    },
    {
        path: 'register/:cod',
        component: AfiliateFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AfiliateRoutingModule {
}
