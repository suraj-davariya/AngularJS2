"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router"); // for routing
var app_component_1 = require("./app.component");
var mylist_component_1 = require("./mylist.component");
var mysecondlist_component_1 = require("./mysecondlist.component");
var highlight_directive_1 = require("./highlight.directive"); // Custom directive
var homepage_component_1 = require("./homepage.component"); // Routing page 1
var aboutpage_component_1 = require("./aboutpage.component"); // Routing page 2
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot([
                {
                    path: "home",
                    component: homepage_component_1.HomePageComponent
                },
                {
                    path: "about",
                    component: aboutpage_component_1.AboutPageComponent
                },
                {
                    path: "",
                    redirectTo: "/home",
                    pathMatch: "full"
                }
            ])
        ],
        declarations: [app_component_1.AppComponent, mylist_component_1.ListComponent, mysecondlist_component_1.SecondListComponent, highlight_directive_1.highlight, homepage_component_1.HomePageComponent, aboutpage_component_1.AboutPageComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map