import { Component } from '@angular/core';
import { Loginform } from '@app/loginform';
import { AuditService } from '@app/auditservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  loginform!:Loginform;

  constructor(private auditservice: AuditService,
    private route: ActivatedRoute,
    private router:Router){
      this.loginform = new Loginform;
    }

  onSubmit() {
    this.auditservice.loginUser(this.loginform).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.message == "Email not exists")
      {
    
        alert("Email not exists");
  

      }
      else if(resultData.message == "Login Success")
  
       {
        this.goToDashboard();
      }
      else
      {
        alert("Incorrect Email and Password not match");
      }
    });
  }

  goToDashboard(){
    this.router.navigate(['myauditapp/home']);
  }

}
