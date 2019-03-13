import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import {LoggedInGuard} from 'ngx-auth-firebaseui';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        //canActivate: [LoggedInGuard]
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
