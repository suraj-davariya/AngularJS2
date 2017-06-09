import { NgModule }      from '@angular/core'; // decorator
import { BrowserModule } from '@angular/platform-browser'; //we are running the application in the browser that's why we are importing it;
// it makes available all the built-in directives for ex. ng-if, ng-for
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// decorating the NgModule that shows that the AppModule is a
// imports :
// declaration :
