import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{AuditApp} from '@app/auditapp';
import { Observable } from 'rxjs';

@Injectable()
export class AuditService {
  audit!:AuditApp[];

  private geturl: string;
  private geturl1: string;
  private posturl:string;
  constructor(private http: HttpClient) {
    this.geturl1 = 'http://localhost:8080/getaudityearmonth';
    this.posturl = 'http://localhost:8080/addaudit';
    this.geturl = 'http://localhost:8080/getaudityear';
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
 
}
