import { Component } from '@angular/core';
import { Userdetails } from '../userdetails';
import { AuditService } from '@app/auditservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  userDetails!:Userdetails;

  constructor(private auditservice: AuditService,
    private route: ActivatedRoute,
    private router:Router){
      this.userDetails = new Userdetails;
    }

    onSubmit() {
      this.auditservice.saveUser(this.userDetails).subscribe((response) => {
        console.error('Form submission was successfull:', response);
        this.goToLogin();
      },
      (error) => {
        console.error('Form submission failed:', error);
        alert('Firstname and EmailAddress already taken!');
      });
    }

    goToLogin(){
      this.router.navigate(['myauditapp/login']);
    }

    refreshPage(){
      window.location.reload();
    }
}
