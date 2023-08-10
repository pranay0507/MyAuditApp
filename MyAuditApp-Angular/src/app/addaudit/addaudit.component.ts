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
        this.auditservice.save(this.audit).subscribe((response) => {
          console.error('Form submission was successfull:', response);
          this.gotoConfirm();
        },
        (error) => {
          console.error('Form submission failed:', error);
          alert('Form submission failed. Please try again later.');
        });
      }

      gotoConfirm() {
        this.router.navigate(['myauditapp/home/saveaudit']);
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
