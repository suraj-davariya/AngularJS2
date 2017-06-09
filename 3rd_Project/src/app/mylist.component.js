/**
 * Created by Suraj.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListComponent = (function () {
    function ListComponent() {
        // @Output is the method to send value to the parent component from child component
        this.onVoted = new core_1.EventEmitter(); // we are specifying boolean datatype of EventEmitter
    }
    ListComponent.prototype.vote = function (agreed) {
        this.onVoted.emit(agreed);
    };
    return ListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListComponent.prototype, "nameszzz", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ListComponent.prototype, "title", void 0);
__decorate([
    core_1.Input('x'),
    __metadata("design:type", String)
], ListComponent.prototype, "randomText", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListComponent.prototype, "onVoted", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: 'my-list',
        template: "\n                <!-- Getting value from parent component ------------starts-->\n                <h2> {{ title }} </h2>\n                <ul>\n                    <li *ngFor=\"let nam of nameszzz\"> {{ nam }}</li>\n                </ul>\n\n                <p> {{ randomText }} </p>\n                <!-- Getting value from parent component -------------ends -->\n                \n                <!-- Passing value to parent component *************starts -->\n                \n                <button (click)=\"vote(true)\">Agree</button>\n                <button (click)=\"vote(false)\">Disagree</button>\n                <!-- Passing value to parent component *************ends -->\n                "
    })
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=mylist.component.js.map