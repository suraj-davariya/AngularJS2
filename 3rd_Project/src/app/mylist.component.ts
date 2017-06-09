/**
 * Created by Suraj.
 */

import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector:'my-list',
    template: `
                <!-- Getting value from parent component ------------starts-->
                <h2> {{ title }} </h2>
                <ul>
                    <li *ngFor="let nam of nameszzz"> {{ nam }}</li>
                </ul>

                <p> {{ randomText }} </p>
                <!-- Getting value from parent component -------------ends -->
                
                <!-- Passing value to parent component *************starts -->
                
                <button (click)="vote(true)">Agree</button>
                <button (click)="vote(false)">Disagree</button>
                <!-- Passing value to parent component *************ends -->
                `
    })

export class ListComponent{

    // @Input is the method to get the data from parent component to child component ----> also need to be imported from @angular/core
    @Input() nameszzz : Array <string>;         // coming from names in component.ts
    @Input() title : string;
    @Input('x') randomText : string ;           // alias name x; now we need to pass this x to component.ts


    // @Output is the method to send value to the parent component from child component
    @Output() onVoted = new EventEmitter<boolean>();        // we are specifying boolean datatype of EventEmitter
    vote(agreed:boolean){
        this.onVoted.emit(agreed);
    }
}