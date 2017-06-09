import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ListComponent } from './mylist.component'
import {SecondListComponent} from "./mysecondlist.component";
import {highlight} from "./highlight.directive";
import {RouterModule} from "@angular/router";
import buildPath = http.buildPath;

@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot([
                    {
                      path : ""

                    }
                  ])
                ],
  declarations: [ AppComponent, ListComponent, SecondListComponent, highlight ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

