import { Component,OnInit  } from '@angular/core';
import { AuditApp } from '@app/auditapp';
import { AuditService } from '@app/auditservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addaudit',
  templateUrl: './addaudit.component.html',
  styleUrls: ['./addaudit.component.css']
})
export class AddauditComponent implements OnInit{
    audit: AuditApp;
    years: number[] = [];
    months:string[] = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    constructor(private auditservice: AuditService,
      private route: ActivatedRoute,
      private router:Router){
        this.audit = new AuditApp;
      }

      onSubmit() {
        this.auditservice.save(this.audit).subscribe(result => this.gotoUserList());
      }
    
      gotoUserList() {
        this.router.navigate(['/addaudit']);
      }

      ngOnInit() {
        const currentYear = new Date().getFullYear();
        const startYear = 2000;
        for (let year = currentYear; year >= startYear; year--) {
          this.years.push(year);
        }
      }

      refreshPage(){
        window.location.reload();
      }
}
