/**
 * Created by Suraj on 05/22/2017.
 */

import { Component } from "@angular/core";


@Component({
  selector : "click-me",
  template: `<button (click)="onClickMe()" >Click Here</button>{{clickMessage}}`
})

export class ClickMeComponent {
  clickMessage = " ";
  onClickMe(){
    this.clickMessage = "Clicked function";
  }
}
