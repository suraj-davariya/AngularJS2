import { Component } from '@angular/core';
import { highlight } from "./highlight.directive";


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><br>
            <p> Agree : {{ agree }} Disagree : {{ disagree }} </p>
            <my-list    [nameszzz]="names" 
                        [title]="title" 
                        [x]="randomText"
                        
                        (onVoted)="onVotedFunction($event)"> <!-- Here x is the alias name we got it from mylist.component.ts  -->                      
            </my-list>
            <!-- event binding -->
            <my-second-list></my-second-list>
            <h3 highlight>This is custom directive in orange color</h3>
            <header>
                <ul>
                    <li><a></a></li>
                    <li></li>
                </ul>
            </header>

            `

})

export class AppComponent {

    name = "Angular";
    title = 'Coming from Component.ts';

    /* Passing this to child components */
    names = ["This", "is", "coming" , "from" , "component.ts"];
    randomText = "This is coming with the help of alias name";

    /*  */
    agree = 0;
    disagree = 0;

    onVotedFunction(agreed:boolean){
        agreed ? this.agree++ : this.disagree++;
    }

}
