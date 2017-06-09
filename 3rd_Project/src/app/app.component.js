"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Angular";
        this.title = 'Coming from Component.ts';
        /* Passing this to child components */
        this.names = ["This", "is", "coming", "from", "component.ts"];
        this.randomText = "This is coming with the help of alias name";
        /*  */
        this.agree = 0;
        this.disagree = 0;
    }
    AppComponent.prototype.onVotedFunction = function (agreed) {
        agreed ? this.agree++ : this.disagree++;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{name}}</h1><br>\n            <p> Agree : {{ agree }} Disagree : {{ disagree }} </p>\n            <my-list    [nameszzz]=\"names\" \n                        [title]=\"title\" \n                        [x]=\"randomText\"\n                        \n                        (onVoted)=\"onVotedFunction($event)\"> <!-- Here x is the alias name we got it from mylist.component.ts  -->                      \n            </my-list>\n            <!-- event binding -->\n            <my-second-list></my-second-list>\n            <h3 highlight>This is custom directive in orange color</h3>\n            <header>\n                <ul>\n                    <li><a routerLink=\"/home\">Home</a></li>\n                    <li><a routerLink=\"/about\">About</a></li>\n                </ul>\n            </header>\n            <router-outlet></router-outlet>\n\n            "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map