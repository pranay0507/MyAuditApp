import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuditlistComponent} from '@app/auditlistcomponent';
import { AddauditComponent } from './addaudit/addaudit.component';
import { GetauditlistComponent } from './getauditlist/getauditlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SaveconfirmComponent } from './saveconfirm/saveconfirm.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AppshellComponent } from './appshell/appshell.component';

const routes: Routes = [
  {path:'myauditapp/home/getaudit',component:GetauditlistComponent},
  { path:'myauditapp/home/addaudit', component: AddauditComponent },
  {path:'myauditapp/home/viewaudit',component:AuditlistComponent},
  {path:'myauditapp/home/saveaudit',component:SaveconfirmComponent},
  {path:'myauditapp/register',component:UserregistrationComponent},
  {path:'myauditapp/login',component:UserloginComponent},
  {path:'myauditapp/home',component:AppshellComponent}
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
