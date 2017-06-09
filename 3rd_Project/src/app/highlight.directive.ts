/**
 * Created by Suraj.
 */

import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
    selector: "[highlight]"
})

export class highlight {
colorzz:string;
    constructor( private el : ElementRef) {
        this.colorzz  = "orange";


        el.nativeElement.style.backgroundColor = this.colorzz;
        console.log(this.colorzz);
    }
        @HostListener("mouseenter") onMouseEnter(){
        console.log("function working");
        console.log(this.colorzz);
            this.el.nativeElement.style.backgroundColor  = "red";
            console.log(this.colorzz);
        }
}