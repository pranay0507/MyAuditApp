import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appshell',
  templateUrl: './appshell.component.html',
  styleUrls: ['./appshell.component.css']
})
export class AppshellComponent implements OnInit{
  title : string = 'MyAuditApp';
  greet !: string;

  

  ngOnInit(){
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
