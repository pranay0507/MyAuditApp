import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuditlistComponent} from '@app/auditlistcomponent';
import { AddauditComponent } from './addaudit/addaudit.component';
import { GetauditlistComponent } from './getauditlist/getauditlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'getaudit',component:GetauditlistComponent},
  { path: 'addaudit', component: AddauditComponent },
  {path:'viewaudit',component:AuditlistComponent}
];

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    GetauditlistComponent
  ],
  imports: [RouterModule.forRoot(routes),FormsModule,
    ReactiveFormsModule,
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
