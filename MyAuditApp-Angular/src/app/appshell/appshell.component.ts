import { Component } from '@angular/core';

@Component({
  selector: 'app-appshell',
  templateUrl: './appshell.component.html',
  styleUrls: ['./appshell.component.css']
})
export class AppshellComponent {
  title : string;
  constructor(){
    this.title = 'MyAuditApp'
  }
}
