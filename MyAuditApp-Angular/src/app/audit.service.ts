import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{AuditApp} from '@app/auditapp';
import { Observable } from 'rxjs';
import { Userdetails } from './userdetails';
import { Loginform } from '@app/loginform';

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

  public  getAuditListForYearAndMonth(audityear:number,auditmonth:string): Observable<AuditApp[]>{
    return this.http.get<AuditApp[]>(this.geturl1,{params:{audityear,auditmonth}});
  }  

  public save(auditApp:AuditApp){
    return this.http.post<AuditApp>(this.posturl,auditApp);
  }

  public  getAuditListByYear(audityear:number): Observable<AuditApp[]>{
    return this.http.get<AuditApp[]>(this.geturl,{params:{audityear}});
  }  

  public saveUser(userdetails:Userdetails){
    return this.http.post<Userdetails>(this.postuserurl,userdetails);
  }

  public loginUser(loginform:Loginform){
    return this.http.post<Loginform>(this.postuserloginurl,loginform);
  }
 
}
