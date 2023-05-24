import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() onbtnClicked = new EventEmitter()

  sideBarOpen(){
    this.onbtnClicked.emit()

    // setTimeout(() => {
    //   window.dispatchEvent(
    //     new Event('resize')
    //   )
    // }, 100);
  }
}
