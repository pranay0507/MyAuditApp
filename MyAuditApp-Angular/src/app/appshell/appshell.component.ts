import { Component, OnInit } from '@angular/core';
import { Loginform } from '@app/loginform';
import { AuditService } from '@app/auditservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appshell',
  templateUrl: './appshell.component.html',
  styleUrls: ['./appshell.component.css']
})
export class AppshellComponent implements OnInit{
  title : string = 'MyAuditApp';
  greet !: string;
  loginform!:Loginform;
  name!:string;

  constructor(private auditservice: AuditService,
     private route: ActivatedRoute,
     private router:Router){
       this.loginform = new Loginform;
     }

logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['myauditapp/login']);
}
  

  ngOnInit(){
   const currentHour = new Date().getHours();

   const user = localStorage.getItem('currentUser');
   
    if(user!=null){
     const myObject = JSON.parse(user);
     const firstname = myObject.firstname;
     if(firstname!=null){
          this.name = firstname;
     }

    }

     if(currentHour<12){
          this.greet = 'Good Morning';
     }else if(currentHour==12 && currentHour<16){
          this.greet = 'Good Afternoon';
     }else{
          this.greet = 'Good Evening';
     }
  }

}
