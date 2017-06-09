/**
 * Created by Suraj.
 */

import { Component } from "@angular/core";

@Component({
  selector : 'my-list',
  template : `<ul>
                <li *ngFor="let name of names">
                    {{ name }}
                </li>
              </ul>`
})

export class ListComponent {
  names = ["John", "Jane", "James"];
}
