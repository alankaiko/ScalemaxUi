import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppMainComponent} from './app.main.component';
import {LoginComponent} from './components/login/login.component';
import {AccessComponent} from './components/access/access.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {
                        path: 'pages',
                        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
                    },
                    {path: '', component: DashboardComponent},
                    {
                        path: 'uikit/menu',
                        loadChildren: () => import('./components/menus/menus.module').then(m => m.MenusModule)
                    },
                ],
            },
            {path: 'pages/login', component: LoginComponent},
            {path: 'pages/access', component: AccessComponent},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
