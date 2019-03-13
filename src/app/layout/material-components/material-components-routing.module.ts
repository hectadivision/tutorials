import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialComponentsComponent } from './material-components.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
    {
        path: '',
        component: MaterialComponentsComponent
    },
    {
        path: 'dialog', component: DialogComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaterialComponentsRoutingModule {}
