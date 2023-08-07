import { Component,OnInit } from '@angular/core';
import{AuditApp} from '@app/auditapp';
import {AuditService} from '@app/auditservice';

@Component({
  selector: 'app-auditlist',
  templateUrl: './auditlist.component.html',
  styleUrls: ['./auditlist.component.css']
})
export class AuditlistComponent implements OnInit {

  audit!: AuditApp[];
 

  constructor(private auditService:AuditService){};

  ngOnInit(){
    this.audit = this.auditService.audit;
  }

}
