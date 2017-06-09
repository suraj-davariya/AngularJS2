import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";               // for routing

import { AppComponent }  from './app.component';
import { ListComponent } from './mylist.component'
import { SecondListComponent } from "./mysecondlist.component";

import { highlight } from "./highlight.directive";              // Custom directive

import { HomePageComponent } from "./homepage.component";       // Routing page 1
import { AboutPageComponent } from "./aboutpage.component";     // Routing page 2

@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot([
                    {
                        path : "home",
                        component : HomePageComponent
                    },
                    {
                        path : "about",
                        component : AboutPageComponent
                    },
                    {
                        path : "", /* this will redirect to default page*/
                        redirectTo : "/home",
                        pathMatch : "full"
                    }
                  ])
                ], /* Configuring the route */
  declarations: [ AppComponent, ListComponent, SecondListComponent, highlight, HomePageComponent, AboutPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

