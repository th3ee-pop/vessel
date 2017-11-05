import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { SurveyManagementComponent } from './survey-management/survey-management.component';

/*自定义组件类型*/
import { InputcmpComponent } from './shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from './shared/radiocmp/radiocmp.component';
import { CheckboxcmpComponent } from './shared/checkboxcmp/checkboxcmp.component';
import { TablecmpComponent } from './shared/tablecmp/tablecmp.component';

/**/

// import { MdRadioModule, MdInputModule} from '@angular/material';

const routes: Routes = [
    { path: 'detail', component: SurveyManagementComponent }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        SurveyManagementComponent,
        InputcmpComponent,
        RadiocmpComponent,
        CheckboxcmpComponent,
        TablecmpComponent,
    ]
})
export class SurveyManagementModule { }