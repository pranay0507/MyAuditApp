import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { AuditApp } from '@app/auditapp';
import { AuditService } from '@app/auditservice';

@Component({
  selector: 'app-getauditlist',
  templateUrl: './getauditlist.component.html',
  styleUrls: ['./getauditlist.component.css']
})
export class GetauditlistComponent implements OnInit{
    myForm!: FormGroup;
    audit!: AuditApp[];
    years: number[] = [];
    months:string[] = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
   

    constructor(private formBuilder: FormBuilder,
      private auditService:AuditService,
      private router: Router){
        this.myForm = this.formBuilder.group({
          audityear:0,
          auditmonth:'',
        });
      };

    onSubmit(){
      const audityear = this.myForm.get('audityear')?.value;
      const auditmonth = this.myForm.get('auditmonth')?.value;
      if(auditmonth !== null){
        this.auditService.getAuditListForYearAndMonth(audityear,auditmonth).subscribe(
          (data)=>{
            this.auditService.audit = data;
            this.router.navigate(['/viewaudit']);
          },(error) => {
            console.error('Error fetching data from Spring Boot:', error);
          }
       )
      }else{
        this.auditService.getAuditListByYear(audityear).subscribe(
          (data)=>{
            this.auditService.audit = data;
            this.router.navigate(['/viewaudit']);
          },(error) => {
            console.error('Error fetching data from Spring Boot:', error);
          }
        )
      }
    };


    ngOnInit(){
      const currentYear = new Date().getFullYear();
      const startYear = 1990;
      for (let year = currentYear; year >= startYear; year--) {
        this.years.push(year);
      }
      this.myForm = this.formBuilder.group({
        audityear: [null, Validators.required],
        auditmonth:[]
      });
    }



}
