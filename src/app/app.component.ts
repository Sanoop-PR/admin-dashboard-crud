import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taste-the-fresh';

  sidebarOnOff:boolean=true
  style:string=''
  screenWidth:any

  toggle(): void{
    this.sidebarOnOff = !this.sidebarOnOff
  }
  

  mode = new FormControl('over' as MatDrawerMode);
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
