/**
 * Created by Suraj.
 */

import { Component } from "@angular/core";
import { ListDataService } from "./data.service";       //import the service we want to use


@Component({
    selector:   "my-second-list",
    template:   `<ul>
                    <li *ngFor="let name of names">
                        {{ name }}
                    </li>    
                </ul>`,
    providers:  [ListDataService]

})

export class SecondListComponent {
    names : Array <string>;

    constructor( private ListDataService : ListDataService ){
        this.names = ListDataService.serviceArrObj;
    }
}