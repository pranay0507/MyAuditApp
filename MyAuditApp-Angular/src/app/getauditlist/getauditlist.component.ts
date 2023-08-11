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
    greet !: string;
    title!:string;
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
        this.title = 'MyAuditApp'
      };

    onSubmit(){
      const audityear = this.myForm.get('audityear')?.value;
      const auditmonth = this.myForm.get('auditmonth')?.value;
      if(auditmonth !== null){
        this.auditService.getAuditListForYearAndMonth(audityear,auditmonth).subscribe(
          (data)=>{
            this.auditService.audit = data;
            this.router.navigate(['myauditapp/home/viewaudit']);
          },(error) => {
            console.error('Error fetching data from Spring Boot:', error);
          }
       )
      }else{
        this.auditService.getAuditListByYear(audityear).subscribe(
          (data)=>{
            this.auditService.audit = data;
            this.router.navigate(['myauditapp/home/viewaudit']);
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

      const currentHour = new Date().getHours();

     if(currentHour<12){
          this.greet = 'Good Morning';
     }else if(currentHour==12 && currentHour<16){
          this.greet = 'Good Afternoon';
     }else{
          this.greet = 'Good Evening';
     }
    }



}
