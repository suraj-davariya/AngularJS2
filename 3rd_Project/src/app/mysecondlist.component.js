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
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service"); //import the service we want to use
var SecondListComponent = (function () {
    function SecondListComponent(ListDataService) {
        this.ListDataService = ListDataService;
        this.names = ListDataService.serviceArrObj;
    }
    SecondListComponent = __decorate([
        //import the service we want to use
        core_1.Component({
            selector: "my-second-list",
            template: "<ul>\n                    <li *ngFor=\"let name of names\">\n                        {{ name }}\n                    </li>    \n                </ul>",
            providers: [data_service_1.ListDataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.ListDataService])
    ], SecondListComponent);
    return SecondListComponent;
}());
exports.SecondListComponent = SecondListComponent;
//# sourceMappingURL=mysecondlist.component.js.map