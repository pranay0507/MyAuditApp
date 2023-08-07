import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuditService} from '@app/auditservice';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditlistComponent } from './auditlist/auditlist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddauditComponent } from './addaudit/addaudit.component';
import {Alphabetvalidatordirective} from './alphabetvalidatordirective';


@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    AuditlistComponent,
    AddauditComponent,
    Alphabetvalidatordirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
