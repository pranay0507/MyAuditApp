import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{AuditApp} from '@app/auditapp';
import { Observable } from 'rxjs';
import { Userdetails } from './userdetails';
import { Loginform } from '@app/loginform';
import { map } from "rxjs/operators";

@Injectable()
export class AuditService {
  audit!:AuditApp[];

  private geturl: string;
  private geturl1: string;
  private posturl:string;
  private postuserurl:string;
  private postuserloginurl:string;
  

  constructor(private http: HttpClient) {
    this.geturl1 = 'http://localhost:8080/myauditapp/home/getaudityearmonth';
    this.posturl = 'http://localhost:8080/myauditapp/home/addaudit';
    this.geturl = 'http://localhost:8080/myauditapp/home/getaudityear';
    this.postuserurl = 'http://localhost:8080/myauditapp/register';
    this.postuserloginurl = 'http://localhost:8080/myauditapp/login';
  }

  public  getAuditListForYearAndMonth(audityear:number,auditmonth:string,name:string): Observable<AuditApp[]>{
    return this.http.get<AuditApp[]>(this.geturl1,{params:{audityear,auditmonth,name}});
  }  

  public save(auditApp:AuditApp){
    return this.http.post<AuditApp>(this.posturl,auditApp);
  }

  public  getAuditListByYear(audityear:number,name:string): Observable<AuditApp[]>{
    return this.http.get<AuditApp[]>(this.geturl,{params:{audityear,name}});
  }  

  public saveUser(userdetails:Userdetails){
    return this.http.post<Userdetails>(this.postuserurl,userdetails);
  }

  public loginUser(loginform:Loginform){
    return this.http.post<Loginform>(this.postuserloginurl,loginform)
    .pipe(
      map(user => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          user.authdata = window.btoa(loginform.emailaddr + ":" + loginform.password );
          localStorage.setItem("currentUser", JSON.stringify(user));
        }

        return user;
      })
    );
  }

  public logout(){
    localStorage.removeItem("currentUser");
  }
 
}
