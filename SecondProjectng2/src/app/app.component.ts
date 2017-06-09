import { Component } from '@angular/core';
import { ClickMeComponent} from './click-me.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> 
            <click-me></click-me>
            <my-list></my-list>`,
})
export class AppComponent  { name = 'Angular'; }
